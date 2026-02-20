import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import Testimonials from "../../components/testimonials/Testimonials";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className="home-modern">
        <div className="home-text">
          <h1>
            Learn skills that <span>actually matter</span>
          </h1>

          <p>
            Upgrade your career with practical courses taught by industry
            experts. Learn faster, build real projects, and get job-ready.
          </p>

          <div className="home-buttons">
            <button onClick={() => navigate("/courses")} className="main-btn">
              Browse Courses
            </button>
            <button onClick={() => navigate("/register")} className="outline-btn">
              Get Started Free
            </button>
          </div>
        </div>

        <div className="home-cards">
          <div className="info-card">
            📚 Expert Courses
          </div>
          <div className="info-card">
            🧠 Practical Learning
          </div>
          <div className="info-card">
            🚀 Career Growth
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
};

export default Home;