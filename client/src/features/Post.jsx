import React, { useState } from "react";
import axios from "axios";
import UserInfo from "./UserInfo";
import BookInfo from "../pages/BookInfo.jsx";

const Post = ({ _id, quote, author, page, bookInfo, user }) => {
  const [showBookInfo, setShowBookInfo] = useState(false);

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
      <div className="header-button-container">
        <button className="header-button">[Edit]</button>
        <button className="header-button" onClick={handleDelete}>
          [X]
        </button>
      </div>
      <h4>{quote}</h4>
      <p>{author}</p>
      <button onClick={() => setShowBookInfo(!showBookInfo)}>
        {showBookInfo ? "Hide Book Info" : "Show Book Info"}
      </button>
      {showBookInfo && <BookInfo bookInfo={bookInfo} page={page} />}
    </div>
  );
};

export default Post;
