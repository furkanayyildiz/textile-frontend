import React from "react";
import textileLogo from "../../img/textile-logo.png";
import classes from "./MainHeader.module.css";
import { useNavigate } from "react-router-dom";

const MainHeader = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    props.userSet(null);
    navigate("/");
  };
  return (
    <header className={classes.mainheader}>
      <a href="/">
        <img src={textileLogo} alt="textileLogo" className={classes.logo} />
      </a>
      {props.user && (
        <nav className={classes.nav}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">About Us</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
