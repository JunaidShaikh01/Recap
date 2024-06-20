const express = require("express");
const { PrismaClient } = require("@prisma/client");
const multer = require("multer");

const prisma = new PrismaClient();
const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/songs", async (req, res) => {
  const songs = await prisma.song.findMany();
  res.json(songs);
});

router.post(
  "/songs",
  upload.fields([{ name: "image" }, { name: "song" }]),
  async (req, res) => {
    const { name, singer, language, category } = req.body;
    const imageUrl = `/uploads/${req.files.image[0].filename}`;
    const songUrl = `/uploads/${req.files.song[0].filename}`;

    const song = await prisma.song.create({
      data: {
        name,
        singer,
        language,
        category,
        imageUrl,
        songUrl,
      },
    });

    res.json(song);
  }
);

module.exports = router;
