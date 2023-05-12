const express = require("express");
const {
  createBill,
  getAllBills,
  getSingleBill,
  deleteBill,
  sendMail,
} = require("./controllers/billController");

const router = express.Router();

router.get("/allbills", getAllBills);
router.post("/newbill", createBill);
router.get("/bill/:id", getSingleBill);
router.delete("/bill/:id", deleteBill);
router.post("/sendmail", sendMail);

module.exports = router;
