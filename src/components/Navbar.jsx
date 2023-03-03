import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  return (
    <div>
      <button onClick={goBack}>Prev</button>
    </div>
  );
};

export default Navbar;
