import React, { useState } from "react";
import axios from "axios";

export const Login = () => {
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
      const res = await axios.post("http://localhost:3000/users/login", user);
      console.log("res: ", res);
      if (res.status == "200") {
        setUser({
          userName: "",
          password: "",
        });
        window.location.reload();
      }
    } catch (error) {
      console.log("Error logging in");
    }
  };

  return (
    <>
      <h1>Login</h1>
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
          type="text"
          name="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
        />
        <br />
        <button onClick={handleSubmit}>Login</button>
      </form>
    </>
  );
};
