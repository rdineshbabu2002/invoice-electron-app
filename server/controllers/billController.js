const Bill = require("../models/billModel");
const catchAsync = require("../utils/catchAsync");

const getAllBills = catchAsync(async (req, res) => {
  const allBills = await Bill.find({}).sort({ date: -1 });

  res.status(200).json({
    status: "success",
    data: allBills,
  });
});

const createBill = catchAsync(async (req, res) => {
  const newBill = await Bill.create(req.body);
  res.status(200).json({
    status: "success",
    data: newBill,
  });
});

const getSingleBill = catchAsync(async (req, res) => {
  const singleBill = await Bill.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: singleBill,
  });
});

const deleteBill = catchAsync(async (req, res) => {
  const deletedBill = await Bill.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
  });
});

module.exports = { getAllBills, createBill, getSingleBill, deleteBill };
