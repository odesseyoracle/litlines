import express from "express";

import {
  register,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

import { userValidationRules } from "../middleware/users/userValidator.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

usersRouter.route("/").get(getAllUsers);

usersRouter.route("/register").post(userValidationRules, register);

usersRouter.route("/:id").get(getOneUser).patch(updateUser).delete(deleteUser);

export { usersRouter, usersMainPath };
