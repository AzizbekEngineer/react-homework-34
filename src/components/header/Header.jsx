import React from "react";
import "./header.scss";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  let isLogin = localStorage.getItem("x-auth-token");

  return (
    <header className="header">
      <div className="container header__container">
        <div className="header__logo">
          <h2>Logo</h2>
        </div>
        <ul className="header__list">
          <li className="header__item">
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li className="header__item">
            <NavLink to={isLogin ? "/admin" : "/login"}>
              {isLogin ? "Admin" : "Login"}
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
