const mongoose = require("mongoose");
let dbConnect = () => {
  if (process.env.DB_NAME) {
    return new Promise((resolve, reject) => {
      mongoose.connect(
        `mongodb://${process.env.DB_USERNAME}:${
          process.env.DB_PASS
        }@ds149596.mlab.com:49596/${process.env.DB_NAME}`
      );
      resolve("app connected to db");
    });
  } else {
    return new Promise((resolve, reject) => {
      resolve("app not connected to db");
    });
  }
};
module.exports = dbConnect;
