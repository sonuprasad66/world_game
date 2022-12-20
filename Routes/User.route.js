const express = require("express");
const userRouter = express.Router();
const {
  addUser,
  getUser,
  createRandomWorld,
} = require("../Controller/User.controller");

userRouter.post("/adduser", addUser);
userRouter.get("/getuser", getUser);
userRouter.get("/randomworld", createRandomWorld);

module.exports = {
  userRouter,
};
