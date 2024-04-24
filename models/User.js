const { Schema } = require("@mui/icons-material");
const mongoose = require("mongoose");
const Scema = mongoose.Schema;

const UserSchema = new Schema({
  name: string,
  email: string,
  password: string,
  dateofBirth: Date,
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
