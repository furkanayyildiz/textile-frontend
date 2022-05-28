import React, { useState, useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";

//page imports
import SignIn from "./components/User/SignIn/SignIn";
import Register from "./components/User/Register/Register";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";
import Profile from "./components/User/Profile/Profile";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState();

  // let loginHandler = () => {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     setIsLoggedIn(true);
  //   }
  // };
  const token = localStorage.getItem("token");
  return (
    <BrowserRouter>
      <MainHeader />
      <div className="bg">
        <Routes>
          <Route
            exact
            path="/"
            element={
              token ? <Navigate to="/home" /> : <Navigate to="/signin" />
            }
          />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/profile/:userId" element={<Profile />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
