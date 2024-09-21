const Products = require('../Models/productModel');
const mongoose = require("mongoose");

const {vendorCheck} = require('../Middleware/verificationHandling');

//GET /products
const getAllProducts = async (req, res) => {
    try {
        const ProductList = await Products.find({}).sort({ createdAt: -1 });
        res.status(200).json(ProductList);
    }
    catch (error) {
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

//GET /products

const getProductsbyNumber = async (req,res) =>
    {
        const {limit} = req.query;
        try
        {
            const products = await Products.find().limit(parseInt(limit))
            if (product) {
                res.status(200).json(products);
            }
            else {
                res.status(404).json({ message: "Products not found." });
            }
        }
        catch(error)
        {
            res.status(500).json({message:"Failed to retrieve Products."});
        }
    }


//POST /products

const createProduct = async (req, res) => {
    try
    {
        if(await vendorCheck(req.body.vendorID,1))
            {
                const newProduct = await Products.create({...req.body});
                res.status(201).json(newProduct);
            }
        else
        {
            res.status(403).json({message: "Access not allowed to create product. User is not a vendor."})
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
                {_id:productID},
                {...req.body},
                {new: true,overwrite:true},
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

//PATCH /products/:productID



//DELETE /products/:productID

const deleteProduct = async (req, res) => {
    const productID = req.params.productID;
    if (!mongoose.Types.ObjectId.isValid(productID)) {
        return res.status(400).json({ message: "Invalid ProductID" })
    }
    try {
        const deletedProduct = await Products.findOneAndDelete({_id:productID})
        if (deletedProduct) {
            res.status(200).json({message:"Product deleted successfully."});
        }
        else {
            res.status(404).json({ message: "Product not found." });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Failed to update Product." });
    }
}

module.exports =
{
    getAllProducts,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct
}