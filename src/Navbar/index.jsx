import React from "react";
import Img from "./logo.png";

const Navbar = () => {
  return (
    <div className="nav-content">
      <img className="rasm" src={Img} alt="" />
      <p className="logo">Fikrbook</p>
    </div>
  );
};

export default Navbar;
