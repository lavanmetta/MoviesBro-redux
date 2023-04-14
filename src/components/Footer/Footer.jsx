import React from "react";
import './Footer.scss'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <p> MoviesBro | Designed By <Link to="https://github.com/lavanmetta">Metta Lavan</Link> |  2023 All rights reserved</p>
    </div>
  );
}

export default Footer;
