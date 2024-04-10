import express from "express";

import {
  register,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

import { upload } from "../utils/multer.js";

import { userValidationRules } from "../middleware/users/userValidator.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers);

usersRouter
  .route("/register")
  .post(upload.single("profilePic"), userValidationRules, register);

usersRouter
  .route("/:id")
  .get(getOneUser)
  .patch(upload.single("image"), updateUser)
  .delete(deleteUser);

export { usersRouter, usersMainPath };
