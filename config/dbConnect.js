const mongoose = require("mongoose");

const dbConnect = async () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => {
      console.log("mongodb connected");
    })
    .catch((e) => {
      console.log("error to connect mongodb ->", e);
    });
};

module.exports = dbConnect;
