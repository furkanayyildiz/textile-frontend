import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../api";

//page imports
import classes from "./Home.module.css";
const Home = () => {
  let { userId } = useParams();

  const [user, setUser] = useState();

  const getUserInfo = async () => {
    let resp = await getUser(userId);
    setUser(resp);
    console.log("user info", user);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className={classes.home}>
      <h1>You are logged In</h1>
      <h1>merhaba {user && user.name}</h1>
    </div>
  );
};

export default Home;
