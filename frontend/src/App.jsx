import React from "react";
import "./App.css";

// React Router components for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// ----------- USER PAGES -----------
import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Verify from "./pages/auth/Verify";
import Footer from "./components/footer/Footer";
import About from "./pages/about/About";
import Account from "./pages/account/Account";
import Loading from "./components/loading/Loading";
import Courses from "./pages/courses/Courses";
import CourseDescription from "./pages/coursedescription/CourseDescription";
import PaymentSuccess from "./pages/paymentsuccess/PaymentSuccess";
import Dashbord from "./pages/dashbord/Dashbord";
import CourseStudy from "./pages/coursestudy/CourseStudy";
import Lecture from "./pages/lecture/Lecture";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ResetPassword from "./pages/auth/ResetPassword";

// ----------- ADMIN PAGES -----------
import AdminDashbord from "./admin/Dashboard/AdminDashbord";
import AdminCourses from "./admin/Courses/AdminCourses";
import AdminUsers from "./admin/Users/AdminUsers";

// ----------- AI CHATBOT -----------
import AIChat from "./components/chat/src/components/AIChat";

// ----------- CONTEXT (GLOBAL USER DATA) -----------
import { UserData } from "./context/UserContext";

const App = () => {

  // Get authentication status, user info and loading state from context
  const { isAuth, user, loading } = UserData();

  return (
    <>
      {/* If authentication is still loading, show loading screen */}
      {loading ? (
        <Loading />
      ) : (
        // BrowserRouter enables routing in the entire app
        <BrowserRouter>

          {/* Header is always visible */}
          <Header isAuth={isAuth} />

          {/* Routes define which component loads for which URL */}
          <Routes>

            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />

            {/* Account page - only if logged in */}
            <Route
              path="/account"
              element={isAuth ? <Account user={user} /> : <Login />}
            />

            {/* If already logged in, don't allow login/register again */}
            <Route path="/login" element={isAuth ? <Home /> : <Login />} />
            <Route path="/register" element={isAuth ? <Home /> : <Register />} />
            <Route path="/verify" element={isAuth ? <Home /> : <Verify />} />
            <Route path="/ai-tutor" element={<AIChat />} />

            {/* Password reset related routes */}
            <Route
              path="/forgot"
              element={isAuth ? <Home /> : <ForgotPassword />}
            />

            {/* Dynamic route with token parameter */}
            <Route
              path="/reset-password/:token"
              element={isAuth ? <Home /> : <ResetPassword />}
            />

            {/* Course description - protected */}
            <Route
              path="/course/:id"
              element={isAuth ? <CourseDescription user={user} /> : <Login />}
            />

            {/* Payment success page - protected */}
            <Route
              path="/payment-success/:id"
              element={isAuth ? <PaymentSuccess user={user} /> : <Login />}
            />

            {/* User dashboard - dynamic user id */}
            <Route
              path="/:id/dashboard"
              element={isAuth ? <Dashbord user={user} /> : <Login />}
            />

            {/* Study page - protected */}
            <Route
              path="/course/study/:id"
              element={isAuth ? <CourseStudy user={user} /> : <Login />}
            />
            
            {/* Lecture page - protected */}
            <Route
              path="/lectures/:id"
              element={isAuth ? <Lecture user={user} /> : <Login />}
            />

            {/* ---------------- ADMIN ROUTES ---------------- */}

            {/* Admin dashboard - protected */}
            <Route
              path="/admin/dashboard"
              element={isAuth ? <AdminDashbord user={user} /> : <Login />}
            />

            {/* Admin course management */}
            <Route
              path="/admin/course"
              element={isAuth ? <AdminCourses user={user} /> : <Login />}
            />

            {/* Admin user management */}
            <Route
              path="/admin/users"
              element={isAuth ? <AdminUsers user={user} /> : <Login />}
            />
          </Routes>

          {/* Footer is always visible */}
          <Footer />

        </BrowserRouter>
      )}
    </>
  );
};

export default App;