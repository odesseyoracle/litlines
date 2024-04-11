import express from "express";

import {
  addBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";

import { upload } from "../utils/multer.js";

import { booksValidationRules } from "../middleware/books/booksValidator.js";

const booksRouter = express.Router();

const booksMainPath = "/books";

booksRouter.route("/").get(getAllBooks);

booksRouter
  .route("/addBook")
  .post(upload.single("bookCover"), booksValidationRules, addBook);

booksRouter
  .route("/:id")
  .get(getOneBook)
  .patch(upload.single("bookCover"), updateBook)
  .delete(deleteBook);

export { booksRouter, booksMainPath };
