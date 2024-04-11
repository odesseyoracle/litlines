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

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBook = await Book.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    // await cloudinary.uploader.destroy(updatedBook.cloudinary_id);
    // const result = await cloudinary.uploader.upload(req.file.path);
    // updatedBook.avatar = result.secure_url;
    // updatedBook.cloudinary_id = result.public_id;

    if (!updatedBook) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book updated", updatedBook });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByIdAndDelete(id);
    await cloudinary.uploader.destroy(book.cloudinary_id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    res
      .status(200)
      .json({ message: `Book ${book.title} successfully deleted` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addBook, getAllBooks, getOneBook, updateBook, deleteUser };
