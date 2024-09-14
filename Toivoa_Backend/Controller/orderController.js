const Orders = require('../Models/orderModel');
const mongoose = require("mongoose");

//GET /Orders
const getAllOrders = async (req, res) => {
    try {
        const OrderList = await Orders.find({}).sort({ createdAt: -1 });
        res.status(200).json(OrderList);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve Orders." });
    }
};

//GET /Orders/:orderID

const getOrderbyID = async (req, res) => {
    const orderID = req.params.orderID;
    if (!mongoose.Types.ObjectId.isValid(orderID)) {
        return res.status(400).json({ message: "Invalid orderID" })
    }
    try {
        const Order = await Orders.findById(orderID);
        if (Order) {
            res.status(200).json(Order);
        }
        else {
            res.status(404).json({ message: "Order not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve Order." });
    }
}

//POST /Orders

const createOrder = async (req, res) => {
    try
    {
        const newOrder = await Orders.create({...req.body});
        res.status(201).json(newOrder);
    }
    catch (error) {
        res.status(400).json({ message: "Failed to create Order", error: error.message });
    }
}

//PUT /Orders/:orderID

const updateOrder = async (req, res) => {
    const orderID = req.params.orderID;
    if (!mongoose.Types.ObjectId.isValid(orderID)) {
        return res.status(400).json({ message: "Invalid orderID" })
    }
    try {
            const updatedOrder = await Orders.findOneAndUpdate(
                {_id:orderID},
                {...req.body},
                {new: true,overwrite:true},
            )
            if (updatedOrder) {
                res.status(200).json(updatedOrder);
            }
            else {
                res.status(404).json({ message: "Order not found." });
            }
        }
    catch (error) {
            res.status(500).json({ message: "Failed to update Order." });
        }
}

//PATCH /Orders/:orderID

//DELETE /Orders/:orderID

const deleteOrder = async (req, res) => {
    const orderID = req.params.orderID;
    if (!mongoose.Types.ObjectId.isValid(orderID)) {
        return res.status(400).json({ message: "Invalid orderID" })
    }
    try {
        const deletedOrder = await Orders.findOneAndDelete({_id:orderID})
        if (deletedOrder) {
            res.status(200).json({message:"Order deleted successfully."});
        }
        else {
            res.status(404).json({ message: "Order not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update Order." });
    }
}

module.exports =
{
    getAllOrders,
    getOrderbyID,
    createOrder,
    updateOrder,
    deleteOrder
}