const express = require("express");
const router = express.Router();
const { requireAuth } = require("../Middleware/jwtHandling");

const {
  getAllOrders,
  getOrderbyID,
  createOrder,
  updateOrder,
  deleteOrder,
} = require("../Controller/orderController");

router.use(requireAuth);

//GET /orders
router.get("/", getAllOrders);

//GET /orders/:orderID
router.get("/:orderID", getOrderbyID);

//POST /orders
router.post("/", createOrder);

//PUT /orders/:OrderID
router.put("/:orderID", updateOrder);

//DELETE /orders/:OrderID
router.delete("/:orderID", deleteOrder);

module.exports = router;
