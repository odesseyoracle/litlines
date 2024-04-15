import React from "react";

import AddPost from "./AddPost.jsx";
import PostList from "./PostList.jsx";

import { useAppContext } from "../contexts/AppContext.jsx";

export const Home = () => {
  const { userState } = useAppContext();

  return (
    <>
      {userState.isLoggedIn && (
        <AddPost name={userState.userName} id={userState._id} />
      )}
      <PostList />
    </>
  );
};
