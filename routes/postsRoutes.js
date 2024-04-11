import express from "express";

import {
  addPost,
  getAllPosts,
  getOnePost,
  updatePost,
  deletePost,
} from "../controllers/postsController.js";

import { postsValidationRules } from "../middleware/posts/postsValidator.js";

const postsRouter = express.Router();

const postsMainPath = "/posts";

postsRouter.route("/").get(getAllPosts);

postsRouter.route("/addPost").post(postsValidationRules, addPost);

postsRouter.route("/:id").get(getOnePost).patch(updatePost).delete(deletePost);

export { postsRouter, postsMainPath };
