const mongoose = require("mongoose");

require("dotenv").config();
const mongoUrl = process.env.mongo_url;
mongoose.connect(mongoUrl);

const UserSchema = mongoose.Schema({
  username: String,
  firstname: String,
  lastname: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

module.exports = {
  User,
};
