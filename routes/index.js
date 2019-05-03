const express = require("express");
const router = express.Router();

const testRoutes = require('./testRoutes');
const imageRoutes = require("./imageRoutes");
const userRoutes = require("./userRoutes");

router.use("/", testRoutes);
router.use("/api", imageRoutes, userRoutes);

module.exports = router;
