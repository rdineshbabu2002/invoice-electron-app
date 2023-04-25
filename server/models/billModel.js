const mongoose = require("mongoose");

const billSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  invoice: {
    type: String,
  },
  date: {
    type: String,
  },
  address: {
    type: String,
  },
  gstin: {
    type: String,
  },
  containsGST: {
    type: Boolean,
  },
  formDetails: {
    type: Object,
    mixed: true,
  },
  vehicleNo: {
    type: String,
  },
  gstPercentage: {
    type: Number,
  },
  date: {
    type: Date,
    default: new Date(),
  },
  tableValues: {
    type: [mongoose.Schema.Types.Mixed],
  },
  tableTotalValues: {
    type: Object,
    mixed: true,
  },
});

const Bill = mongoose.model("Bill", billSchema);
module.exports = Bill;
