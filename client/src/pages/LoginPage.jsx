import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
    profilePic: "",
  });

  function handleChange(type) {
    return (e) => {
      const value = type === "image" ? e.target.files[0] : e.target.value;
      setData({ ...data, [e.target.name]: value });
    };
  }

  return (
    <>
      <h1>Login</h1>
      <form>
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          id="userName"
          placeholder="Username"
          name="userName"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="profilePc">Profile Picture</label>
        <input
          type="file"
          id="profilePic"
          name="profilePic"
          onChange={handleChange("image")}
        />
        <br />
        <button>Register</button>
      </form>
    </>
  );
};

export default LoginPage;
