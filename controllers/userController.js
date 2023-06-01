const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel");

const register = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashPassword
    const user = await User.create(req.body);

    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ message: "user does not exist" });
    } else if (!(await bcrypt.compare(password, user.password))) {
      return res.status(401).send({ message: "password invalid" });
    }
    console.log(req.user);
    const token = jwt.sign(
      { user_id: user.id,},
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).send({
      message: "user connected successfully",
      user,
      token
    });
  } catch (error) {
    console.log(error)
    res.status(400).send(error);
  }
};

const userInfo = async (req, res) => {
  try {
    const user = await User.findOne({_id: req.user.id})
    if(!user) return res.status(404).json({success: false, message: "user not found"})

    res.status(200).json({success: true, data: {name: user.name, email: user.email}})
  } catch ( error ) {
    res.status(500).json({success: false, error, message: "error getting user info"})
  }
}

module.exports = {
  register,
  login,
  userInfo
};
