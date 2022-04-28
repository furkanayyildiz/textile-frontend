import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//page imports
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
function App() {
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
        userSet(response.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let userSet = (user) => {
    setUser(user);
  };
  return (
    <BrowserRouter>
      <MainHeader user={user} userSet={userSet} />
      <div className="bg">
        <Routes>
          <Route exact path="/" element={<SignIn userSet={userSet} />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={() => <Home user={user} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
