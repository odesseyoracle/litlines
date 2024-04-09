import express from "express";

import {
  register,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
} from "../controllers/usersController.js";

const usersRouter = express.Router();

const usersMainPath = "/users";

export { usersRouter, usersMainPath };
