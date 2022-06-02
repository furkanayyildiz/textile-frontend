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
    setUser(resp.data);
    console.log("user info", user);
  };
  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="col-md-8 pt-5">
      <div className="card mb-3">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Full Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <h6>{user && user.name + user.surname}</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Email</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              <h6>{user && user.mail}</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Phone</h6>
            </div>
            <div className="col-sm-9 text-secondary"> {user && user.phone}</div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">TC</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user && user.personal_identity_no}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Company Name</h6>
            </div>
            <div className="col-sm-9 text-secondary">
              {user && user.company_name}
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-sm-3">
              <h6 className="mb-0">Gender</h6>
            </div>
            <div className="col-sm-9 text-secondary">{user && user.gender}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
