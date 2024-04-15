import React from "react";

const Post = ({ quote, author, page, bookInfo, user }) => {
  const postStyle = {
    border: "1px solid #ccc",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "20px",
    backgroundColor: "#f9f9f9",
  };

  const headerStyle = {
    fontSize: "18px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const contentStyle = {
    fontSize: "16px",
    marginBottom: "10px",
  };

  return (
    <div style={postStyle}>
      <h4 style={headerStyle}>Quote: {quote}</h4>
      <p style={contentStyle}>Author: {author}</p>
      <p style={contentStyle}>Page: {page}</p>
      <p style={contentStyle}>Book Info: {bookInfo}</p>
      <p style={contentStyle}>User: {user}</p>
    </div>
  );
};

export default Post;
