const express = require("express");
const router = express.Router();

const {
  getAllGoods,
  createGood,
  getSingleGood,
  updateGood,
  deleteGood,
} = require("../controllers/goodsController");

router.get("/", getAllGoods);
router.get("/:id", getSingleGood);
router.patch("/:id", updateGood);
router.delete("/:id", deleteGood);
router.post("/creategood", createGood);

module.exports = router;
