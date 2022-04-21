import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <div className="bg">
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
