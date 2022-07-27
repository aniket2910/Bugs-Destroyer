const express = require("express");

require("dotenv").config();
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { connectDB } = require("./config/db");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(process.env.PORT, () => {
  try {
    connectDB();
    console.log("Connected to MongoDB");
    console.log(`Server started at port ${process.env.PORT}`);
  } catch (e) {
    console.log(e);
  }
});
