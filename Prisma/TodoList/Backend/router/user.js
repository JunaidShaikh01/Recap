const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const zod = require("zod");
const app = express();
require("dotenv").config();
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;
console.log("JWT secret: ", JWT_SECRET);
const { PrismaClient } = require("@prisma/client");
const { authMiddleware } = require("../middleware/middleware");
const prisma = new PrismaClient();

const signupSchema = zod.object({
  username: zod.string().email(),
  firstname: zod.string(),
  lastname: zod.string(),
  password: zod.string().min(8),
});

const signinSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(8),
});

//signup
userRouter.post("/signup", async (req, res) => {
  const { username, password, firstname, lastname } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const success = signupSchema.safeParse(req.body);
  if (!success.success) {
    return res.status(404).json({
      msg: "You sent the worong inputs",
    });
  }

  const existingUser = await prisma.user.findUnique({
    where: { username: username },
  });
  if (existingUser) {
    return res.status(404).json({
      msg: "User already exists",
    });
  }
  const user = await prisma.user.create({
    data: {
      username: username,
      password: hashedPassword,
      firstname: firstname,
      lastname: lastname,
    },
  });

  // const token = jwt.sign({ userId: user.id }, JWT_SECRET);
  res.json({ user });
});

//signin

userRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const success = signinSchema.safeParse(req.body);
  if (!success) {
    return res.status(404).json({
      msg: "You sent the worong inputs",
    });
  }
  const user = await prisma.user.findUnique({
    where: {
      username: username,
    },
  });
  const userId = user.id;
  console.log("User Id: ", userId);
  const passwordMatch = await bcrypt.compare(password, user.password);
  if (!passwordMatch) {
    return res.status(401).json({ msg: "Invalid password" });
  }

  const token = jwt.sign({ userId }, JWT_SECRET);
  res.json({ msg: "Signin successful", token });
});

// get Logedin user
userRouter.get("/me", authMiddleware, async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      id: req.userId,
    },
  });
  res.json({ user });
});
module.exports = {
  userRouter,
};
