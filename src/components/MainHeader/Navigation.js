import React from "react";
import classes from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <React.Fragment>
      {props.isLoggedIn && (
        <li>
          <a href="/">About Us</a>
        </li>
      )}
      {props.isLoggedIn && (
        <li>
          <button onClick={props.onLogout}>Logout</button>
        </li>
      )}
    </React.Fragment>
  );
};

export default Navigation;
