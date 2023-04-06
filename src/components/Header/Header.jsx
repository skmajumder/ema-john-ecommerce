import React from "react";
import "./Header.css";
import Logo from "../../../public/assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="container px-20 py-3 flex justify-between items-center">
        <a href="/">
          {/* <img src="assets/images/logo.svg" alt="" /> */}
          <img src={Logo} alt="" />
        </a>
        <nav className="nav-menu">
          <ul className="nav-list flex justify-between items-center gap-3 text-white text-base">
            <li className="nav-list">
              <a href="#">Order</a>
            </li>
            <li className="nav-list">
              <a href="#">Order Review</a>
            </li>
            <li className="nav-list">
              <a href="#">Inventory</a>
            </li>
            <li className="nav-list">
              <a href="#">Login</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
