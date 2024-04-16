import React from "react";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const navigate = useNavigate();
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
        "http://localhost:4000/users/register",
        formData
      );
      console.log("res:", res);

      if (res.status == "200") {
        console.log("successfully registered");
        setData({
          userName: "",
          password: "",
          email: "",
          profilePic: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <div className="container">
      <h2>Register User</h2>
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
    </div>
  );
};

export default RegisterPage;
