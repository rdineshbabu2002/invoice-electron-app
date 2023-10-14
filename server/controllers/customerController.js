const catchAsync = require("../utils/catchAsync");
const Customer = require("../models/customerModel");

const getAllCustomers = catchAsync(async (req, res) => {
  console.log("get all customers");
  const customers = await Customer.find();
  console.log(customers);
  res.status(200).json({
    status: "success",
    data: customers,
  });
});

const createCustomer = catchAsync(async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({
    status: "success",
    data: customer,
  });
});

const getSingleCustomer = catchAsync(async (req, res) => {
  const customer = await Customer.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: customer,
  });
});

const updateCustomer = catchAsync(async (req, res) => {
  // get the fields to update
  const { name, address, gstin } = req.body;
  //update the customer

  const customer = await Customer.findByIdAndUpdate(
    req.params.id,
    { name, address, gstin },
    { new: true, runValidators: true }
  );
  res.status(200).json({
    status: "success",
    data: customer,
  });
});

const deleteCustomer = catchAsync(async (req, res) => {
  const customer = await Customer.findByIdAndDelete(req.params.id);
  res.status(204).json({
    status: "success",
    data: null,
  });
});

module.exports = {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
};
