import React from "react";

import AddPost from "./AddPost.jsx";
import PostList from "./PostList.jsx";

import { useAppContext } from "../contexts/AppContext.jsx";

export const Home = () => {
  const { userState } = useAppContext();

  return (
    <div className="container">
      {userState.isLoggedIn ? (
        <AddPost />
      ) : (
        <div className="post">Login to post quotes</div>
      )}
      <PostList />
    </div>
  );
};
