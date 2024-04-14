import React from "react";

export const Login = () => {
  const handleChange = () => {};

  const handleSubmit = () => {};

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
