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
});

const Book = model("book", bookSchema);
export default Book;
