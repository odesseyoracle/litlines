import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";

const Navbar = () => {
  const navigate = useNavigate();
  const [userState, setUserState] = useState({ isLoggedIn: false });

  useEffect(() => {
    const checkUserLogin = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/check-login"
        );
        const cookieExists = response.data.cookieExists;
        console.log("cookieExists:", cookieExists);
        setUserState({ ...userState, isLoggedIn: cookieExists ? true : false });
      } catch (error) {
        console.log("Error checking session cookie:", error);
      }
    };
    checkUserLogin();
  }, []);

  const handleLogin = async () => {
    try {
      if (userState.isLoggedIn) {
        await axios.post("http://localhost:3000/users/logout");
        if (res.status == "200") {
          console.log("Logout successful");
        }
      }
      setUserState({ isLoggedIn: false });
      navigate("/login");
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
