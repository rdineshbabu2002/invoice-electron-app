const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Customer must have a name"],
  },
  address: {
    type: String,
    required: [true, "Customer must have an address"],
  },
  gstin: {
    type: String,
    required: [true, "Customer must have a GSTIN"],
  },
  distance: {
    type: Number,
    required: [true, "Customer must have a distance"],
  },
  location: {
    type: String,
    required: [true, "Customer must have a location"],
  },
  pincode: {
    type: Number,
    required: [true, "Customer must have a pincode"],
  },
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
