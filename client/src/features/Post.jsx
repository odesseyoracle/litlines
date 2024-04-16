import React from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import BookInfo from "../pages/BookInfo.jsx";

const Post = ({ _id, quote, author, page, bookInfo, user }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/posts/${_id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="post">
      <UserInfo id={user} />
      <button onClick={handleDelete}>[X]</button>
      <h4>{quote}</h4>
      <p>{author}</p>
      <BookInfo bookInfo={bookInfo} page={page} />
    </div>
  );
};

export default Post;
