const express = require("express");
const {
  createBill,
  getAllBills,
  getSingleBill,
  deleteBill,
} = require("../controllers/billController");

const router = express.Router();

router.get("/allbills", getAllBills);
router.post("/newbill", createBill);
router.get("/bill/:id", getSingleBill);
router.delete("/bill/:id", deleteBill);

module.exports = router;
