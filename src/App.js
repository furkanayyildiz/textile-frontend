import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import LoginPage from "./LoginPage";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
    </React.Fragment>
  );
}

export default App;
