import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "./AddBook";

import { useAppContext } from "../contexts/AppContext.jsx";

const AddPost = () => {
  const { userState } = useAppContext();

  const [post, setPost] = useState({
    quote: "",
    author: "",
    page: "",
    bookInfo: "",
    user: userState.user._id,
  });

  const [books, setBooks] = useState([]);

  const [newBookLink, setNewBookLink] = useState(false);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get("http://localhost:4000/books");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching books:", error);
      }
    };

    fetchBooks();
  }, [books]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleBookSelect = (e) => {
    const { value } = e.target;
    if (value === "addNewBook") {
      setNewBookLink(true);
    } else {
      const selectedBook = books.find((book) => book._id === value);

      setNewBookLink(false);
      setPost({
        ...post,
        author: selectedBook.author,
        bookInfo: selectedBook._id,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/posts/addPost", post);

      if (res.status == "200") {
        console.log("Quote successfully added");
        setPost({
          ...post,
          quote: "",
          author: "",
          page: "",
          bookInfo: "",
          user: userState.user._id,
        });
        window.location.reload();
      }
    } catch (error) {
      console.log("Error adding quote", error);
    }
  };

  return (
    <div className="container popup">
      <h2>Add a quote 📝 </h2>
      <form>
        <label htmlFor="bookInfo">Book</label>

        <select name="bookInfo" id="bookInfo" onChange={handleBookSelect}>
          <option value="">Select a book ...</option>
          {books.map((book) => (
            <option key={book._id} value={book._id}>
              {book.title} - {book.author}
            </option>
          ))}
          <option value="addNewBook">Add a new Book ...</option>
        </select>

        {newBookLink && <AddBook setNewBookLink={setNewBookLink} />}

        <br />
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
        <label htmlFor="author">
          Author: <span>{post.author}</span>
        </label>

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
        <label htmlFor="user">
          User: <span id="user">{userState.user.userName}</span>
        </label>

        <br />
        <button onClick={handleSubmit}>Add Quote</button>
      </form>
    </div>
  );
};

export default AddPost;
