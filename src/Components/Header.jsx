import React, { useState } from "react";
import logo from "../Assets/logo.svg";
import logodark from "../Assets/logo-dark.svg";
import sun from "../Assets/sun.png";
import moon from "../Assets/moon.png";
import menuDark from "../Assets/menu-dark.svg";
import menuLight from "../Assets/menu-light.svg";
import "./css/Header.css";

function Header({ theme, changeTheme }) {
  const [menu, setMenu] = useState(false);
  const isLight = theme.name === "light";
  const bgdark =
    "linear-gradient(rgba(32, 32, 34, 1),rgba(32, 32, 34, 1),rgba(32, 32, 34, 0.9),rgba(32, 32, 34, 0.6),rgba(32, 32, 34, 0.4),rgba(32, 32, 34, 0))";
  const bglight =
    "linear-gradient(rgba(255, 255, 255, 1),rgba(255, 255, 255, 1),rgba(255, 255, 255, 0.9),rgba(255, 255, 255, 0.6),rgba(255, 255, 255, 0.4),rgba(255, 255, 255, 0))";

  const bgColor = isLight ? bglight : bgdark;

  const handleMenu = () => {
    console.log("click");
    setMenu(!menu);
  };

  return (
    <header style={{ background: `${bgColor}` }}>
      <div className="app-container header">
        <img src={isLight ? logodark : logo} alt="" className="logo-icon" />
        <nav
          onClick={handleMenu}
          style={menu ? { display: "flex" } : { display: "none" }}
        >
          <a
            href="#home"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Home
          </a>
          <a
            href="#about"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            About
          </a>
          <a
            href="#skills"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Skills
          </a>
          <a
            href="#projects"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Projects
          </a>
          <a
            href="#connect"
            className="header-link"
            style={{ color: `${theme.text}` }}
          >
            Connect
          </a>
        </nav>
        <div className="sub-menu">
          <button className="theme-switcher">
            <img src={isLight ? moon : sun} alt="" onClick={changeTheme} />
          </button>
          <img
            src={isLight ? menuDark : menuLight}
            alt=""
            className="menu"
            onClick={handleMenu}
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
