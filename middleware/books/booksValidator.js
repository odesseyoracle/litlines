import { body } from "express-validator";
import validate from "../validate.js";

const booksValidationRules = [
  body("title")
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Title must be between 2 and 100 characters"),

  body("author")
    .notEmpty()
    .withMessage("Author is required")
    .isLength({ min: 2, max: 50 })
    .withMessage("Author name must be between 2 and 50 characters"),

  body("isbn").optional().isISBN().withMessage("ISBN must be a valid ISBN"),

  body("publisher")
    .optional()
    .isLength({ max: 100 })
    .withMessage("Publisher name cannot exceed 100 characters"),

  body("language")
    .notEmpty()
    .withMessage("Language is required")
    .isLength({ max: 50 })
    .withMessage("Language must not exceed 50 characters"),

  validate,
];

export { booksValidationRules };
