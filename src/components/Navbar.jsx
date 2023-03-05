import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div className="navbar-container">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="navbar-back-logo"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
        />
      </svg>
      <div className="navbar-title-container">
        <h1 className="navbar-title">Sakthi Murugan Rice Mill</h1>
      </div>
    </div>
  );
};

export default Navbar;
