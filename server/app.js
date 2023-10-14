const express = require("express");
require("dotenv").config();
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

const billRoutes = require("./routes/billRoutes");
const customerRoutes = require("./routes/customerRoutes");
const goodRoutes = require("./routes/goodRoutes");
const port = process.env.PORT;

app.use(express.json());
app.use("/api/bill/", billRoutes);
app.use("/api/customer/", customerRoutes);
app.use("/api/goods/", goodRoutes);

app.use(cors());

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
