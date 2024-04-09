import User from "../models/usersModel.js";

const register = async (req, res) => {
  try {
    const { userName, password, email } = req.body;

    const userExists = await User.findOne({ userName });
    const emailExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }
    if (emailExists) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = { userName, password, email };

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

export { register };
