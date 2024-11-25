import React from "react";
import "./Header.css";
import Logo from "../../assets/images/Logo.svg";
import Search from "../../assets/images/search.svg";
import ShoppingBag from "../../assets/images/shopping-bag.svg";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header-wrapper">
          <div className="navbar-left">
            <ul className="navbar-info">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Menu</a>
              </li>
              <li>
                <a href="#">Reservation</a>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="navbar-right">
            <ul className="navbar-info">
              <li>
                <a href="#">Pages</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Contract</a>
              </li>
              <div className="header-icons">
                <img className="header-icon" src={Search} alt="Search.svg" />
                <img
                  className="header-icon"
                  src={ShoppingBag}
                  alt="Shopping-bag.svg"
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
