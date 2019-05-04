const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema(
  {
    text: {
      type: String,
      required: true
    },
    timeWritten: {
      type: String,
      required: true
    },
    writer: {
      type: String,
      required: true
    },
    imageId: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: "Image"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Comment", commentSchema);
