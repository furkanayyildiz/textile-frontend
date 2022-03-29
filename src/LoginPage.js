import React from "react";
import textileBackground from "./img/textile-background.jpg";
import "./LoginPage.css";

const LoginPage = () => {
  return (
    <main>
      <div>
        <img
          src={textileBackground}
          alt="textile-background"
          className="textileBackground"
        />
      </div>
    </main>
  );
};

export default LoginPage;
