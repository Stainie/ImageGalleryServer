const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const imageSchema = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    image_url: {
      type: String,
      required: true
    },
    creatorId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "User"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Image", imageSchema);
