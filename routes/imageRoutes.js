const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const imageController = require("../controllers/imageController");

router.get("/images", isAuth, imageController.getAllImages);

router.get("/images/:imageId", isAuth, imageController.getSingleImage);

router.put("/images", isAuth, imageController.updateImage);

router.post("/images", isAuth, imageController.postImage);

router.delete("/images/:imageId", isAuth, imageController.deleteImage);

module.exports = router;
