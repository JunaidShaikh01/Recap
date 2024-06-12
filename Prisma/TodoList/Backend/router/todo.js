const express = require("express");
const { authMiddleware } = require("../middleware/middleware");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const todoRouter = express.Router();

//Creating todo
todoRouter.post("/add_todo", authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title: title,
      description: description,
      userId: req.userId,
    },
  });
  res.json({ todo });
});


todoRouter.get("/todos", authMiddleware, async (req, res) => {
  const todos = await prisma.todo.findMany({
    where: {
      userId: req.userId,
    },
  });
  res.json({ todos });
})
module.exports = {
  todoRouter,
};
