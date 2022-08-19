import React from "react";
import './_Header.scss'
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

const Header = () => {
  return (
    <>
      <div className="header-container gradient__bg">
        <div className="header-wrapper">
          <Navbar />
          <Home />
        </div>
      </div>
    </>
  );
};

export default Header;
