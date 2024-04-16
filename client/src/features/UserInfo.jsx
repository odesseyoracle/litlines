import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const UserInfo = ({ id }) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/users/${id}`);
        setUser(res.data);
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="user-info">
      <img src={user.avatar} alt="Profile Pic" />
      <span>{user.userName}</span>
    </div>
  );
};

export default UserInfo;
