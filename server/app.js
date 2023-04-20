const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");

const billRoutes = require("./routes");

const port = process.env.PORT;

app.use(billRoutes);

mongoose.connect(process.env.MONGO_URL).then(() => {
  console.log("Connected to database");
});

app.listen(port, () => {
  console.log(`Server Started listening in port : ${port}`);
});

app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fail",
    message: "Can't find the Requested url",
  });
});
