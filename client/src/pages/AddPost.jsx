import React from "react";
import { useState } from "react";
import axios from "axios";

const AddPost = () => {
  const [post, setPost] = useState({
    quote: "",
    author: "",
    page: "",
    bookInfo: "",
    user: "(change this to) Logged in User",
  });

  function handleChange() {
    return (e) => {
      const value = e.target.value;
      setBook({ ...post, [e.target.name]: value });
    };
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("quote", post.quote);
      formData.append("author", post.author);
      formData.append("page", post.page);
      formData.append("bookInfo", post.bookInfo);
      formData.append("user", post.user);

      const res = await axios.post(
        "http://localhost:3000/posts/addPost",
        formData
      );
      if (res.status == "200") {
        console.log("quote successfully added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add a quote 📝 </h1>
      <form>
        <label htmlFor="quote">Quote</label>
        <textarea
          type="text"
          id="quote"
          name="quote"
          placeholder="Quote"
          rows="5"
          cols="40"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="page">Page</label>
        <input
          type="number"
          id="page"
          name="page"
          placeholder="Page"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="bookInfo">Book</label>
        <input
        // LOOK FOR BOOK IN DB, IF NOT LINK TO ADD BOOK FORM
        />
        <br />
        <label htmlFor="user">
          User: <span id="user">{post.user}</span>
        </label>

        <br />
        <button onClick={handleSubmit}>Add Quote</button>
      </form>
    </>
  );
};

export default AddPost;
