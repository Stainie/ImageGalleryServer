const express = require("express");
const router = express.Router();
const isAuth = require("../middlewares/isAuth");
const commentController = require("../controllers/commentController");

router.get("/comments/:imageId", commentController.getAllComments);

router.get("/comments/singleComment/:commentId", commentController.getSingleComment);

router.post("/comments/:imageId", commentController.postComment);

module.exports = router;
