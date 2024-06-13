const express = require("express");
const multer = require("multer");
const cors = require("cors");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

app.post(
  "/upload",
  upload.fields([{ name: "image" }, { name: "audio" }]),
  async (req, res) => {
    const imageUrl = req.files.image[0].path;
    const audioUrl = req.files.audio[0].path;

    const upload = await prisma.upload.create({
      data: {
        imageUrl,
        audioUrl,
      },
    });

    res.json(upload);
  }
);

app.get("/uploads", async (req, res) => {
  const uploads = await prisma.upload.findMany();
  res.json(uploads);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
