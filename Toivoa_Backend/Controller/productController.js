const Products = require('../Models/productModel');
const mongoose = require("mongoose");

const { vendorCheck } = require('../Middleware/verificationHandling');

//PRODUCTS

//GET /products
const getProductsbyNumberorAll = async (req, res) => {
    const { number } = req.query;
    try {
        if (!number) {
            const ProductList = await Products.find({}).sort({ createdAt: -1 });
            res.status(200).json(ProductList);
        }
        else {
            const ProductList = await Products.find().limit(parseInt(number))
            if (ProductList) {
                res.status(200).json(ProductList);
            }
            else {
                res.status(404).json({ message: "Products not found." });
            }
        }
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Failed to retrieve Products." });
    }
};

//GET /products/:ProductID

const getProductbyID = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const product = await Products.findById(productID);
        if (product) {
            res.status(200).json(product);
        }
        else {
            res.status(404).json({ message: "Product not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to retrieve Product." });
    }
}

//POST /products

const createProduct = async (req, res) => {
    try {
        if (await vendorCheck(req.body.vendorID, 1)) {
            const newProduct = await Products.create({ ...req.body });
            res.status(201).json(newProduct);
        }
        else {
            res.status(403).json({ message: "Access not allowed to create product. User is not a vendor." })
        }
    }
    catch (error) {
        res.status(400).json({ message: "Failed to create Product", error: error.message });
    }
}

//PUT /products/:productID

const updateProduct = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const updatedProduct = await Products.findOneAndUpdate(
            { _id: productID },
            { ...req.body },
            { new: true, overwrite: true },
        )
        if (updatedProduct) {
            res.status(200).json(updatedProduct);
        }
        else {
            res.status(404).json({ message: "Product not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update Product." });
    }
}

//DELETE /products/:productID

const deleteProduct = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const deletedProduct = await Products.findOneAndDelete({ _id: productID })
        if (deletedProduct) {
            res.status(200).json({ message: "Product deleted successfully." });
        }
        else {
            res.status(404).json({ message: "Product not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update Product." });
    }
}

//COMMENTS
//Due to time crunch, we are only going to have posting and deleting comments.

//POST /products/comment

const addComment = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const foundProduct = await Products.findById(productID);
        const newReview =
        {
            userID: req.body.userID,
            rating: req.body.rating,
            comment: req.body.comment,
            date: new Date
        }
        foundProduct.reviewList.push(newReview);
        await foundProduct.save();
        res.status(200).json({ message: "Comment added successfully." });

    }
    catch (err) {
        res.status(500).json({ message: "Failed to add comment." });
    }
}

//DELETE /products/comment
const deleteComment = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const foundProduct = await Products.findById(productID);
        const deleteReviewID = req.body.deleteReviewID
        const updatedReviewList =foundProduct.reviewList.filter(review => review._id.toString() !== deleteReviewID)
        if (updatedReviewList.length === foundProduct.reviewList.length) {
            return res.status(404).json({ message: "Comment not found" });
        }
        foundProduct.reviewList = updatedReviewList;
        await foundProduct.save();
        res.status(200).json({ message: "Comment deleted successfully" });

    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Failed to delete comment." });
    }
}

module.exports =
{
    getProductsbyNumberorAll,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct,
    addComment,
    deleteComment
}