import React from "react";
import textileLogo from "../../img/textile-logo.png";
import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
  return (
    <header className={classes.mainheader}>
      <a href="/">
        <img src={textileLogo} alt="textileLogo" className={classes.logo} />
      </a>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
