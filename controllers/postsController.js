import Post from "../models/postsMode.js";

const addPost = async (req, res) => {
  try {
    const { quote, author, page, bookInfo, user } = req.body;
    const newPost = { quote, author, page, bookInfo, user };
    await Post.create(newPost);
    res.status(200).json({ message: "New quote posted", quote });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find();
    if (!allPosts) {
      return res.status(404).json({ message: "No posts found!" });
    }

    res.status(200).json(allPosts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOnePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
    if (!post) {
      res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found!" });
    }

    res.status(200).json({ message: "Post updated", updatedPost });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByIdAndDelete(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found!" });
    }
    res.status(200).json({ message: "Post deleted", post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { addPost, getAllPosts, getOnePost, updatePost, deletePost };
