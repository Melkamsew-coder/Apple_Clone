import React from "react";
import logo from "../../commonResource/images/icons/logo-sm.png";// importing the images as modules
import searchIcon from "../../commonResource/images/icons/search-icon-sm.png";
import cartIcon from "../../commonResource/images/icons/cart-sm.png";

// Converting HTML to React Components (JSX): // Using Functional components// No Prop(Property) is used for now 
const Header = () => {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="#">
            <img src={logo} alt="Apple Logo" />   
          </a>
          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link" href="/mac/">
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  iPhone
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  iPad
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Watch
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TV
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Music
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/search/">
                  <img src={searchIcon} alt="Search" />
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/cart/">
                  <img src={cartIcon} alt="Cart" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
