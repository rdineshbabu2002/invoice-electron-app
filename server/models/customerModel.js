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
});

const Customer = mongoose.model("Customer", customerSchema);
module.exports = Customer;
