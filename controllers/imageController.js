const Image = require("../models/imageModel");
const errorHandlers = require("../utils/errorHandlers");

exports.getAllImages = async (req, res, next) => {
  try {
    const products = await Image.find({ creatorId: req.userId });
    res.status(200).json({
      sucess: true,
      message: "Success",
      info: products
    });
  } catch (err) {
    return next(err);
  }
};

exports.getSingleImage = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Image.findOne({
      _id: productId,
      creatorId: req.userId
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

exports.updateImage = async (req, res, next) => {
  const { _id, title, image_url } = req.body;
  try {
    const product = await Image.findOne({ _id: _id, creatorId: req.userId });

    if (!product) {
      errorHandlers.mainErrorHandler("Not Authorized", 401);
    }
    product.title = title;
    product.image_url = image_url;
    const savedProduct = await product.save();

    res.status(201).json({
      sucess: true,
      message: "Product Updated",
      info: savedProduct
    });
  } catch (err) {
    return next(err);
  }
};

exports.postImage = async (req, res, next) => {
  const { title, image_url } = req.body;

  try {
    const product = new Image({
      title,
      image_url,
      creatorId: req.userId
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

exports.deleteImage = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Image.findOneAndRemove({
      _id: productId,
      creatorId: req.userId
    });
    if (!product) {
      res.status(400).json({
        sucess: false,
        message: "Product Not Found"
      });
    } else {
      res.status(200).json({
        sucess: true,
        message: "Product Deleted"
      });
    }
  } catch (err) {
    return next(err);
  }
};
