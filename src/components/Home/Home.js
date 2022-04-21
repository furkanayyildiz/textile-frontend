import React, { useState, useEffect } from "react";
import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import axios from "axios";
const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(config)
      .then((response) => {
        setUser(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
