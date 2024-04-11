import React from "react";
import { useState } from "react";
import axios from "axios";

const AddBook = () => {
  return (
    <>
      <h1>Add a book 📚 </h1>
      <form>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" placeholder="Title" />
        <br />
        <label htmlFor="author">Author</label>
        <input type="text" id="author" name="author" placeholder="Author" />
        <br />
        <label htmlFor="isbn">ISBN</label>
        <input type="text" id="isbn" name="isbn" placeholder="ISBN" />
        <br />
        <label htmlFor="publisher">Publisher</label>
        <input
          type="text"
          id="publisher"
          name="publisher"
          placeholder="Publisher"
        />
        <br />
        <label htmlFor="language">Language</label>
        <input
          type="text"
          id="language"
          name="language"
          placeholder="Language"
        />
        <br />
        <label htmlFor="bookCover">Book Cover</label>
        <input type="file" id="bookCover" name="bookCover" />
        <br />
        <button>Add Book</button>
      </form>
    </>
  );
};

export default AddBook;
