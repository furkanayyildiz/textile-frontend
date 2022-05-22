import React from "react";

//page imports
import classes from "./Home.module.css";
import Card from "../UI/Card/Card";

const Home = () => {
  return (
    <div className={classes.home}>
      <Card>
        <h1>Welcome to The Home Page</h1>
      </Card>
    </div>
  );
};

export default Home;
