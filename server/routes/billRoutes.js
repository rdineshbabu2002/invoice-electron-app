const express = require("express");
const {
  createBill,
  getAllBills,
  getSingleBill,
  deleteBill,
  uploadJson,
} = require("../controllers/billController");
const multer = require("multer");

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.get("/", getAllBills);
router.post("/", createBill);
router.get("/:id", getSingleBill);
router.delete("/:id", deleteBill);
router.post("/uploadjson", upload.single("excelFile"), uploadJson);

module.exports = router;
