import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = ({ id }) => {
  const [user, setUser] = useState({});
  console.log("user:", user);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  const userInfoStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.1)", // Slightly darker background color
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "10px",
    display: "flex",
    alignItems: "center",
  };

  const profilePicStyle = {
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    marginRight: "10px",
  };

  return (
    <div style={userInfoStyle}>
      <img src={user.avatar} alt="Profile Pic" style={profilePicStyle} />
      <span>{user.userName}</span>
    </div>
  );
};

export default UserInfo;
