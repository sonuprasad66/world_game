const express = require("express");
const { userModel } = require("../Models/User.model");

const addUser = async (req, res) => {
  const { name, level } = req.body;
  try {
    const new_user = new userModel({
      name: name,
      level: level,
    });

    await new_user.save();
    res.send({ message: "User added successfully", status: "Success" });
  } catch (err) {
    res.send({ message: "User added Failed", status: err });
  }
};

const getUser = async (req, res) => {
  const user = await userModel.find();
  res.send(user);
};

const createRandomWorld = async (req, res) => {
  let num = Math.floor(Math.random() * 10);
  let result = "";
  const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const charLength = char.length;
  for (let i = 0; i < num; i++) {
    result += char.charAt(Math.floor(Math.random() * charLength));
  }
  //   console.log(result);
  res.send(result);
};

module.exports = {
  addUser,
  getUser,
  createRandomWorld,
};
