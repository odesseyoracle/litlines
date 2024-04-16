import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import AddBook from "./AddBook";

import { useAppContext } from "../contexts/AppContext.jsx";

const AddPost = () => {
  const { userState, fetchQuotes } = useAppContext();

  const [post, setPost] = useState({
    quote: "",
    author: "",
    page: "",
    bookInfo: "",
    user: userState._id,
  });

  const [books, setBooks] = useState([]);

  const [newBookLink, setNewBookLink] = useState(false);

  const [bookSelected, setBookSelected] = useState(false);

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
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleBookSelect = (e) => {
    const { value } = e.target;
    console.log("value:", value);
    if (value !== "") {
      setBookSelected(true);
    } else {
      setBookSelected(false);
    }
    if (value === "addNewBook") {
      setNewBookLink(true);
    } else {
      const selectedBook = books.find((book) => book._id === value);
      console.log("selectedBook:", selectedBook);
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
    console.log("post:", post);
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
          user: userState._id,
        });
        fetchQuotes();
        setBookSelected(false);
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

        {newBookLink && (
          <AddBook
            setNewBookLink={setNewBookLink}
            setBookSelected={setBookSelected}
          />
        )}
        {bookSelected && !newBookLink && (
          <div className="container">
            <br />
            <label htmlFor="quote">Quote</label>
            <textarea
              type="text"
              id="quote"
              name="quote"
              placeholder="Quote"
              rows="5"
              cols="40"
              value={post.quote}
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
              value={post.page}
              onChange={handleChange}
            />
            <br />
            <label htmlFor="user">
              User: <span id="user">{userState.userName}</span>
            </label>

            <br />
            <button onClick={handleSubmit}>Add Quote</button>
          </div>
        )}
      </form>
    </div>
  );
};

export default AddPost;
