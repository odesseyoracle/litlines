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
      let data = await res.data;
      data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setQuotes(data);
    } catch (error) {
      console.log("Error fetching quotes", error);
    } finally {
      setLoading(false);
    }
  };

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
