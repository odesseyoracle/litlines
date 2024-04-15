import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";

const Navbar = () => {
  const [userState, setUserState] = useState({ isLoggedIn: false });

  useEffect(() => {
    const checkUserLogin = () => {
      const cookies = document.cookie.split("; ");
      const sessionCookie = cookies.find((cookie) =>
        cookie.startsWith("sessionToken=")
      );
      setUserState({ isLoggedIn: sessionCookie ? true : false });
    };
    checkUserLogin();
  }, []);

  const handleLogin = async () => {
    try {
      if (userState.isLoggedIn) {
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <nav>
        <img className="logo" src={logo} alt="LitLines Logo" />
        <h1>LitLines</h1>
        <button onClick={handleLogin}>
          {userState.isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
