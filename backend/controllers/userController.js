import User from "../models/user.js";

const addUser = async (req, res) => {
  try {
    // const { name, email, password } = req.body;
    // console.log(name, email, password);
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal server error" });
  }
};

export default addUser;
