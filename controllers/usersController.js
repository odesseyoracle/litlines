import User from "../models/usersModel.js";

import { cloudinary } from "../utils/cloudinary.js";
import bcrypt from "bcrypt";

const register = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);

    const { userName, password, email } = req.body;

    const userExists = await User.findOne({ userName });
    const emailExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      userName,
      password: hashedPassword,
      email,
      avatar: result.secure_url,
      cloudinary_id: result.public_id,
    };

    await User.create(newUser);

    res.status(200).json({ message: "New user added 👓", user: userName });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneUser = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    // await cloudinary.uploader.destroy(user.cloudinary_id);
    // const result = await cloudinary.uploader.upload(req.file.path);
    // user.avatar = result.secure_url;
    // user.cloudinary_id = result.public_id;

    const updatedUser = await User.findByIdAndUpdate(
      id,
      // { $set: {req.body, avatar : , cloudinary_id: } },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated", updatedUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);
    await cloudinary.uploader.destroy(user.cloudinary_id);
    if (!user) {
      res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: `User ${user.userName} deleted successfully` });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { register, getAllUsers, getOneUser, updateUser, deleteUser };
