import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "/logo.png";
import axios from "axios";
import { useAppContext } from "../contexts/AppContext.jsx";
import AuthButton from "./AuthButton.jsx";

const Navbar = () => {
  const navigate = useNavigate();
  const { userState, dispatchUser } = useAppContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/users/check-login",
          { withCredentials: true }
        );

        dispatchUser({ type: "fetch-user-data", value: response.data });
      } catch (error) {
        console.log("Error checking session cookie:", error);
      }
    };
    fetchUserData();
  }, []);

  const navigateToLogin = () => {
    navigate("/login");
  };

  const handleLogout = async () => {
    try {
      if (userState.isLoggedIn) {
        const res = await axios.post(
          "http://localhost:4000/users/logout",
          {},
          {
            withCredentials: true,
          }
        );
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
        <Link to="/">
          <img className="logo" src={logo} alt="LitLines Logo" />
        </Link>

        <h1>LitLines</h1>
        {/* <button onClick={navigateToLogin}>
          {userState.isLoggedIn ? "Logout" : "Login"}
        </button> */}
        {userState.isLoggedIn ? (
          <AuthButton text="Logout" handleAuth={handleLogout} />
        ) : (
          <AuthButton text="Login" handleAuth={navigateToLogin} />
        )}
      </nav>
    </>
  );
};

export default Navbar;
