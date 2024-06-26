import React, { useState } from "react";
import axios from "axios";

import { Link, useNavigate } from "react-router-dom";

import { useAppContext } from "../contexts/AppContext.jsx";

export const Login = () => {
  const { dispatchUser } = useAppContext();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/users/login", user, {
        withCredentials: true,
      });
      const data = res.data;

      if (res.status == "200") {
        setUser({
          userName: "",
          password: "",
        });
        dispatchUser({ type: "fetch-user-data", value: data.user });
        navigate("/");
      }
    } catch (error) {
      console.log("Error logging in");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Username"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
      <Link to="/register">Click here to create an account</Link>
    </div>
  );
};
