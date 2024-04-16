import React, { useState, useEffect } from "react";

import Post from "../features/Post.jsx";

import { useAppContext } from "../contexts/AppContext.jsx";

const PostList = () => {
  const { fetchQuotes, quotes } = useAppContext();

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <h2>Feed</h2>
      {quotes.map((quote) => (
        <Post key={quote._id} {...quote} />
      ))}
    </>
  );
};

export default PostList;
