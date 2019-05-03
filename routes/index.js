const express = require("express");
const router = express.Router();

const imageRoutes = require("./imageRoutes");
const userRoutes = require("./userRoutes");

router.use("/api", imageRoutes, userRoutes);

module.exports = router;
