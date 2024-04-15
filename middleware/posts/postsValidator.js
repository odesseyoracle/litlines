import { body } from "express-validator";
import validate from "../validate.js";

const postsValidationRules = [
  body("quote"),
  body("author"),
  body("page").optional(),
  body("bookInfo").optional().isMongoId(),
  body("user").notEmpty().isMongoId(),
  body("createdAt").optional(),
  validate,
];

export { postsValidationRules };
