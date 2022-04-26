import React from "react";
import textileLogo from "../../img/textile-logo.png";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = ({ user }) => {
  // const handleLogout = () => {
  //   localStorage.clear();
  //   userSet(null);
  // };
  return (
    <header className={classes.mainheader}>
      <a href="/">
        <img src={textileLogo} alt="textileLogo" className={classes.logo} />
      </a>
      {user && (
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About Us</a>
            </li>

            <li>
              <button>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
