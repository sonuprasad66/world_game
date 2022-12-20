const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, require: true },
  level: { type: String, require: true },
});

const userModel = new mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
