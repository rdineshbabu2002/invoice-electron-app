const express = require("express");
const router = express.Router();

const {
  getAllCustomers,
  createCustomer,
  getSingleCustomer,
  updateCustomer,
  deleteCustomer,
} = require("../controllers/customerController");

router.get("/", getAllCustomers);
router.get("/:id", getSingleCustomer);
router.patch("/:id", updateCustomer);
router.delete("/:id", deleteCustomer);
router.post("/createcustomer", createCustomer);

module.exports = router;
