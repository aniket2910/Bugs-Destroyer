const { connect } = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    connect(
      `${process.env.MONGO_START}${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}${process.env.MONGO_END}`
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = { connectDB };
