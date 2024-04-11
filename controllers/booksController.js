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
