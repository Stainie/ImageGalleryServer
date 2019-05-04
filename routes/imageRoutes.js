const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const imageController = require("../controllers/imageController");

router.get("/images/:userId", imageController.getAllImages);

router.get("/images/singleImage/:imageId", imageController.getSingleImage);

router.put("/images", imageController.updateImage);

router.post("/images/:userId", imageController.postImage);

router.delete("/images/:imageId", isAuth, imageController.deleteImage);

module.exports = router;
