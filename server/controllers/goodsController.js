const Good = require("../models/goodModel");
const catchAsync = require("../utils/catchAsync");
// similar to customer controller

const getAllGoods = catchAsync(async (req, res) => {
  const goods = await Good.find();
  res.status(200).json({
    status: "success",
    data: goods,
  });
});

const createGood = catchAsync(async (req, res) => {
  const good = await Good.create(req.body);
  res.status(201).json({
    status: "success",
    data: good,
  });
});

const getSingleGood = catchAsync(async (req, res) => {
  const good = await Good.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: good,
  });
});

const updateGood = catchAsync(async (req, res) => {
  // get the fields to update
  const { name, hsn, qty, rate } = req.body;
  //update the good

  const good = await Good.findByIdAndUpdate(
    req.params.id,
    { name, hsn, qty, rate },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    status: "success",
    data: good,
  });
});

const deleteGood = catchAsync(async (req, res) => {
  const good = await Good.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllGoods,
  createGood,
  getSingleGood,
  updateGood,
  deleteGood,
};
