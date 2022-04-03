const express = require("express");
const router = express.Router();

const {
  createOrder,
  getOrders,
  updateOrder,
  deleteOrder,
  getOrderById,
} = require("../controller/Order");

router.use(logger);

router.post("/new", createOrder);

router.get("/", getOrders);

router.put("/:id", updateOrder);

router.delete("/:id", deleteOrder);

router.get("/:id", getOrderById);

function logger(req, res, next) {
  console.log("Runnning your requests.....");
  next();
}

module.exports = router;
