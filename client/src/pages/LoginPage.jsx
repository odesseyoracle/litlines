import React from "react";

const LoginPage = () => {
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
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          placeholder="Password"
          name="password"
        />
        <label htmlFor="profilePc">Profile Picture</label>
        <input type="file" id="profilePic" name="profilePic" />
        <button>Register</button>
      </form>
    </>
  );
};

export default LoginPage;
