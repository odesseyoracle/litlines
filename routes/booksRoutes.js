import express from "express";

import {
  addBook,
  getAllBooks,
  getOneBook,
  updateBook,
  deleteBook,
} from "../controllers/booksController.js";

import { upload } from "../utils/multer.js";

import { booksValidationRules } from "../middleware/users/booksValidator.js";

const booksRouter = express.Router();

const usersMainPath = "/books";

usersRouter.route("/").get(getAllBooks);

usersRouter
  .route("/addBook")
  .post(upload.single("bookCover"), booksValidationRules, addBook);

usersRouter
  .route("/:id")
  .get(getOneBook)
  .patch(upload.single("bookCover"), updateBook)
  .delete(deleteBook);

export { booksRouter, booksMainPath };
