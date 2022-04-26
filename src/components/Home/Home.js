import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
const Home = ({ user }) => {
  return (
    <div className={classes.home}>
      {user ? (
        <h1>
          Hello {user.name} {user.surname}
        </h1>
      ) : (
        <h1>You are Not logged In</h1>
      )}
    </div>
  );
};

export default Home;
