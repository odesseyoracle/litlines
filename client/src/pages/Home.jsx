import React from "react";

import AddPost from "./AddPost.jsx";
import PostList from "./PostList.jsx";

import { useAppContext } from "../contexts/AppContext.jsx";

export const Home = () => {
  const { userState } = useAppContext();

  return (
    <div className="container">
      {userState.isLoggedIn ? <AddPost /> : <h4>Login to post quotes</h4>}
      <PostList />
    </div>
  );
};
