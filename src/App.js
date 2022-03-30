import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />

      <Register />
    </React.Fragment>
  );
}

export default App;
