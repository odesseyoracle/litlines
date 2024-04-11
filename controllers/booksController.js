import Book from "../models/booksModel.js";

import { cloudinary } from "../utils/cloudinary.js";

const addBook = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const { title, author, isbn, publisher, language } = req.body;
    const newBook = {
      title,
      author,
      isbn,
      publisher,
      language,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    };
    await Book.create(newBook);
    res.status(200).json({ message: "New book added 📖", book: newBook.title });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    if (!books) {
      return res.status(404).json({ message: "No books found!" });
    }
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const getOneBook = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addBook, getAllBooks, getOneBook };
