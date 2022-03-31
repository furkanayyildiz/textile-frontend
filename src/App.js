import React, { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn/SignIn";
import Register from "./components/Register/Register";
import Footer from "./components/Footer/Footer";
import MainHeader from "./components/MainHeader/MainHeader";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginHandler = () => {};
  const logoutHandler = () => {};
  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <div className="bg">
        <main>
          {!isLoggedIn && <Register />}
          {isLoggedIn && <Home onLogout={logoutHandler} />}
        </main>
      </div>
    </React.Fragment>
  );
}

export default App;
