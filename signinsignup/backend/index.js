const express = require("express");
const { User } = require("./db/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const zod = require("zod");
const app = express();
const port = 3000;
app.use(cors());
require("dotenv").config();

app.use(bodyParser.json());

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
});

app.post("/signup", async (req, res) => {
  const success = signupSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "Invalid credentioals",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(404).json({
      msg: "User already exists",
    });
  }
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });

  res.status(201).json({
    msg: "User Created successfully",
    user,
  });
});

app.post("/signin", async function (req, res) {
  const sucess = signinSchema.safeParse(req.body);
  if (!sucess) {
    return res.status(404).json({
      msg: "Invalid credentials",
    });
  }

  const user = await User.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  // const usersusername = user.map((user) => {
  //   username: user.username;
  // });
  res.status(202).json({
    msg: "Sign in Succefully",
  });
});

app.listen(port, () => {
  console.log(`port liststed on ${port}`);
});
