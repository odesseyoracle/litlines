import React from "react";

const AuthButton = ({ text, handleAuth }) => {
  return <button onClick={handleAuth}>{text}</button>;
};

export default AuthButton;
