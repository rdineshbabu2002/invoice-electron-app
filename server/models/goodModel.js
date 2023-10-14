const mongoose = require("mongoose");
// name , hsn-acs ,qty, rate
const goodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Good must have a name"],
  },
  "hsn-acs": {
    type: String,
    required: [true, "Good must have a HSN"],
  },
  qty: {
    type: Number,
    required: [true, "Good must have a quantity"],
  },
  rate: {
    type: Number,
    required: [true, "Good must have a rate"],
  },
});

const Good = mongoose.model("Good", goodSchema);
module.exports = Good;
