const express = require("express");
const {
  createBill,
  getAllBills,
  getSingleBill,
} = require("./controllers/billController");

const router = express.Router();

router.get("/allbills", getAllBills);
router.post("/newbill", createBill);
router.get("/bill/:id", getSingleBill);

module.exports = router;
