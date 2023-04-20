const Bill = require("../models/billModel");
const getAllBills = (req, res) => {
  const allBills = Bill.find({});

  res.status(200).json({ name: "Hello" });
};

const createBill = (req, res) => {
  res.status(200).json({ name: "create Bill" });
};

const getSingleBill = (req, res) => {
  res.status(200).json({ name: "get single bill" });
};

module.exports = { getAllBills, createBill, getSingleBill };
