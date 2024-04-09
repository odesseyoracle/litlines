import { body } from "express-validator";
import validate from "../validate.js";

const userValidationRules = [
  body("userName")
    .isLength({ min: 3, max: 15 })
    .withMessage("The username must be between 3 and 15 characters in length."),
  body("password")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[?!])[0-9a-zA-Z?!]{8,}$/)
    .withMessage(
      "The password must contain at least 1 number, 1 lowercase and uppercase character, one special character and be at least 8 characters long."
    ),
  body("email").isEmail().withMessage("Please enter a valid email address!"),
  validate,
];

export { userValidationRules };
