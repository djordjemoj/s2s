import React, { useState, useEffect } from "react";
import menuItems from "./MenuItems";
import "./Navbar2.css";
import { HashLink } from "react-router-hash-link";
import { Twirl as Hamburger } from "hamburger-react";
import maliLogo from "../../assets/smallLogo.png";
// import Logo from "../../../public/"

const Navbar2 = () => {
  const [active, setActive] = useState(false);

  // const body = document.querySelector("body");

  const handleClick = () => {
    setActive(!active);
    // const mediaQuery = window.matchMedia("(max-width: 960)");
    // if (mediaQuery.matches) {

    //   body.style.overflowY = active ? "hidden" : "auto";

    //   //alert("poz");
    // }
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={maliLogo} className="logo" alt="s2s" />
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <Hamburger toggled={active} toggle={setActive} />
      </div>
      <ul className={active ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              <HashLink
                to={item.url}
                className={item.cName}
                onClick={handleClick}
              >
                {item.title}
              </HashLink>
            </li>
          );
        })}
      </ul>
      {/* <Button>SIGN UP</Button> */}
    </nav>
  );
};

export default Navbar2;
