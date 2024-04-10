import React from "react";
import { useState } from "react";

const LoginPage = () => {
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
    profilePic: "",
  });
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
        />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Email" name="email" />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="Password"
          name="password"
        />
        <br />
        <label htmlFor="profilePc">Profile Picture</label>
        <input type="file" id="profilePic" name="profilePic" />
        <br />
        <button>Register</button>
      </form>
    </>
  );
};

export default LoginPage;
