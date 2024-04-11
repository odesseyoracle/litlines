import React from "react";
import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    isbn: "",
    publisher: "",
    language: "",
    bookCover: "",
  });

  function handleChange(type) {
    return (e) => {
      const value = type === "image" ? e.target.files[0] : e.target.value;
      setBook({ ...book, [e.target.name]: value });
    };
  }

  const handleSubmit = async (e) => {
    console.log("test");
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("title", book.title);
      formData.append("author", book.author);
      formData.append("isbn", book.isbn);
      formData.append("publisher", book.publisher);
      formData.append("language", book.language);
      formData.append("bookCover", book.bookCover);

      const res = await axios.post(
        "http://localhost:3000/books/addBook",
        formData
      );
      if (res.status == "200") {
        console.log("book successfully added");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Add a book 📚 </h1>
      <form>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          placeholder="Author"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="isbn">ISBN</label>
        <input
          type="string"
          id="isbn"
          name="isbn"
          placeholder="ISBN"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          placeholder="Publisher"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          name="language"
          placeholder="Language"
          onChange={handleChange("text")}
        />
        <br />
        <label htmlFor="bookCover">Book Cover</label>
        <input
          type="file"
          id="bookCover"
          name="bookCover"
          onChange={handleChange("image")}
        />
        <br />
        <button onClick={handleSubmit}>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
