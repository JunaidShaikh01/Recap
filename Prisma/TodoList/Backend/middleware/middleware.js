const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(404).json({
      msg: "Missing auth",
    });
  }

  const token = authHeader.split(" ")[1];
  console.log("Token", token);

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    console.log("Decoded token: ", decoded);

    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.log("Error:" , error);
    res.status(404).json({
      msg: "Invalid token",
    });
  }
};

module.exports = {
  authMiddleware,
};
