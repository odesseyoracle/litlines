import React from "react";
import axios from "axios";

const Post = ({ _id, quote, author, page, bookInfo, user }) => {
  const postStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "rgba(249, 249, 249, 0.8)", // Semi-transparent background color
    position: "relative", // To position the delete button
    textAlign: "center", // Center the quote
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
    fontStyle: "italic", // Italic font style for quotes
  };

  const contentStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    position: "absolute",
    top: "5px",
    right: "5px",
    backgroundColor: "transparent",
    color: "black",
    border: "none",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/posts/${_id}`);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div style={postStyle}>
      <button onClick={handleDelete} style={buttonStyle}>
        [X]
      </button>
      <h4 style={headerStyle}>{quote}</h4>
      <p style={contentStyle}>{author}</p>
      <p style={contentStyle}>Page: {page}</p>
      <p style={contentStyle}>Book Info: {bookInfo}</p>
      <p style={contentStyle}>User: {user}</p>
    </div>
  );
};

export default Post;
