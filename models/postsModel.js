import { Schema, model } from "mongoose";

const postSchema = new Schema({
  quote: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  page: {
    type: Number,
  },
  bookInfo: {
    type: Schema.Types.ObjectId,
    ref: "book",
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "user",
    reqired: true,
  },
});

const Post = model("post", postSchema);
export default Post;
