import React from "react";

const Post = ({ quote, author, page, bookInfo, user }) => {
  return (
    <div>
      <h4>Quote: {quote}</h4>
      <h4>Author: {author}</h4>
      <h4>Page: {page}</h4>
      <h4>bookInfo</h4>
      <h4>User</h4>
    </div>
  );
};

export default Post;
