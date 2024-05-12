const express = require("express");
const userRouter = express.Router();
const { User } = require("../db/db");
const zod = require("zod");
const app = express();

const signupSchema = zod.object({
  username: zod.string().email(),
  password: zod.string(),
  firstname: zod.string(),
  lastname: zod.string(),
});

const signinSchema = zod.object({
  username: zod.string(),
  password: zod.string(),
});

userRouter.post("/signup", async (req, res) => {
  const sucess = signupSchema.safeParse(req.body);
  if (!sucess) {
    return res.json({
      msg: "Invalid Input",
    });
  }
  const existingUser = await User.findOne({
    username: req.body.username,
  });

  if (existingUser) {
    return res.status(404).json({
      msg: "User alreeady exists",
    });
  }

  const user = await User.crate({
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
  });
  const userId = user._id;
  console.log("UserId:- ", userId);
});

module.exports = {
  userRouter,
};
