const express = require("express");
const dashboardRoute = require("./dashboard");

const router = express.Router();

router.use("/dashboard", dashboardRoute);

module.exports = router;
