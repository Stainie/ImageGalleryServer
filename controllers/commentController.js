const Comment = require('../models/commentModel');
const errorHandlers = require("../utils/errorHandlers");

exports.getAllComments = async (req, res, next) => {
    try {
      const products = await Comment.find({ imageId: req.imageId });
      res.status(200).json({
        sucess: true,
        message: "Success",
        info: products
      });
    } catch (err) {
      return next(err);
    }
  };

  exports.getSingleComment = async (req, res, next) => {
    const { productId } = req.params;
    try {
      const product = await Comment.findOne({
        _id: productId,
        imageId: req.imageId
      });
  
      if (!product) {
        errorHandlers.mainErrorHandler("Not Authorized", 401);
      }
      res.status(200).json({
        sucess: true,
        message: "Success",
        info: product
      });
    } catch (err) {
      return next(err);
    }
  };

  exports.postComment = async (req, res, next) => {
    const { text, commenter } = req.body;
  
    try {
      const product = new Comment({
        text,
        timeWritten,
        writter,
        imageId: req.imageId
      });
      const savedProduct = await product.save();
  
      res.status(200).json({
        sucess: true,
        message: "Product Created",
        info: savedProduct
      });
    } catch (err) {
      return next(err);
    }
  };