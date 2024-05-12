const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;

app.use(express.json());

mongoose.connect(
  "mongodb+srv://admin:EZuedYHcWSsY0jtd@cluster0.qe2sdxz.mongodb.net/recap"
);

const User = mongoose.model("User", {
  username: String,
  firstname: String,
  name: String,
});

app.post("/post", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const user = new User({
    name: name,
    username: username,
    password: password,
  });

  user.save();
  res.json({ msg: "Username added successfully" });
});

app.get("/get", async function (req, res) {
  try {
    const users = await User.find({}).exec();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`App listed on port ${port}`);
});
