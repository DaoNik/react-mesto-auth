import React from "react";
import logo from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header({ link, text, onLogout }) {
  function handleLogout() {
    if (text === "Выйти") {
      onLogout();
    }
  }

  return (
    <header className="header">
      <a href="./" className="header__link">
        <img src={logo} alt="Логотип Mesto-Russia" className="header__image" />
      </a>
      <Link onClick={handleLogout} className="header__link-auth" to={link}>
        {text}
      </Link>
    </header>
  );
}

export default Header;
