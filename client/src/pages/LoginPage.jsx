import React from "react";
import { useState } from "react";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("userName", data.userName);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("profilePic", data.profilePic);

      const res = await axios.post(
        "http://localhost:3000/users/register",
        formData
      );

      if (res.ok) {
        console.log("successfully registered");
        setData({
          userName: "",
          password: "",
          email: "",
          profilePic: "",
        });
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

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
        <button onClick={handleSubmit}>Register</button>
      </form>
    </>
  );
};

export default LoginPage;
