import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { userState, dispatchUser } = useAppContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/users/check-login",
          { withCredentials: true }
        );
        console.log("response:", response);
        dispatchUser({ type: "fetch-user-data", value: response.data });
      } catch (error) {
        console.log("Error checking session cookie:", error);
      }
    };
    fetchUserData();
  }, []);

  const navigateToLogin = async () => {
    try {
      if (userState.isLoggedIn) {
        const res = await axios.post("http://localhost:3000/users/logout");
        if (res.status == "200") {
          console.log("Logout successful");
          dispatchUser({ type: "logout" });
        }
      }

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
        <button onClick={navigateToLogin}>
          {userState.isLoggedIn ? "Logout" : "Login"}
        </button>
      </nav>
    </>
  );
};

export default Navbar;
