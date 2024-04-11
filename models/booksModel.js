import { Schema, model } from "mongoose";

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: Number,
  publisher: String,
  language: String,
  avatar: {
    type: String,
  },
  cloudinary_id: {
    type: String,
  },
});

const Book = model("book", bookSchema);
export default Book;
