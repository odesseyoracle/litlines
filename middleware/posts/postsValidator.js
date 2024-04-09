import { body } from "express-validator";
import validate from "../validate.js";

const postsValidationRules = [
  body("quote"),
  body("author"),
  body("page").optional(),
  body("bookInfo").optional().isMongoId(),
  body("user").isMongoId(),
  validate,
];

export { postsValidationRules };
