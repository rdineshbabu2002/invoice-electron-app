const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  invoice: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  gstin: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  gstPercentage: {
    type: Number,
    required: true,
  },
  tableValues: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
  tableTotalValues: {
    type: [mongoose.Schema.Types.Mixed],
    required: true,
  },
});

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
