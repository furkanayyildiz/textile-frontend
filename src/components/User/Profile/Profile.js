import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getUser } from "../../../api";
import Card from "../../UI/Card/Card";

//page imports
import classes from "./Profile.module.css";
const Profile = () => {
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
    <div className={classes.profile}>
      <Card>
        <h1>Merhaba {user && user.name}</h1>
      </Card>
    </div>
  );
};

export default Profile;
