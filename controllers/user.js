const User = require("../model/user");
const {
  encryptPassword,
  comparePassword,
  decryptPassword,
} = require("../encryption/index");
const jwt = require("jsonwebtoken");
const jwtAuth = require("../authentication/jwtAuth");

const logIn = async (req, res) => {
  try {
    const { password } = req.body;
    const { paramPass, id, email } = req.params;
    if (comparePassword(password, paramPass)) {
      //create token
      const token = jwt.sign(
        {
          id: id,
          email: email,
        },
        process.env.SECRETKEY,
        {
          expiresIn: 43200,
        },
      );
      return res.status(202).json(token);
    }
    return res.status(404).json("Fail Authentication");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const showUser = async (req, res) => {
  try {
    const user = await User.find({});
    res.status(201).json(user);
  } catch (error) {
    res.status(501).json({ message: error.message });
  }
};
const findUser = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email: email });
    if (!user) return res.status(404).json("User Not Exists!");
    res.status(202).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const signIn = async (req, res) => {
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: encryptPassword(req.body.password),
    });
    const token = jwt.sign(
      {
        id: newUser._id,
        email: newUser.email,
      },
      process.env.SECRETKEY,
      {
        expiresIn: 43200,
      },
    );
    return res.status(202).json({ token: token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = { logIn, showUser, findUser, signIn };
