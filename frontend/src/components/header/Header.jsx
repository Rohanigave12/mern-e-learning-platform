import React, { useContext } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";

const Header = ({ isAuth }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="header">
      <div className="logo">E-Learning</div>

      <div className="link">
        <Link to="/">Home</Link>
        <Link to="/courses">Courses</Link>
        <Link to="/about">About</Link>

        {/* AI Tutor */}
        <Link to="/ai-tutor">AI Tutor</Link>

        {isAuth ? (
          <Link to="/account">Account</Link>
        ) : (
          <Link to="/login">Login</Link>
        )}

        {/* 🌙 Theme Toggle Button */}
        <button onClick={toggleTheme} className="theme-btn">
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </header>
  );
};

export default Header;