import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "../features/Post.jsx";

const PostList = () => {
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const fetchQuotes = async () => {
    setLoading(true);
    try {
      const res = await axios.get("http://localhost:3000/posts/");
      const data = await res.data;
      setQuotes(data);
    } catch (error) {
      console.log("Error fetching quotes", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Feed</h1>
      {quotes.map((quote) => (
        <Post {...quote} />
      ))}
    </>
  );
};

export default PostList;
