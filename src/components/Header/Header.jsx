import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/Logo.png";
import User from "../../images/user.png";

import "./Header.scss";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">
          <img src={Logo} alt="logo" />
          <h2>MoviesBro</h2>
        </div>
      </Link>
      <div className="user-image">
        <img src={User} alt="user" />
      </div>
    </div>
  );
}

export default Header;
