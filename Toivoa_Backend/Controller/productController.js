const Products = require('../Models/productModel');

//GET /Products
const getAllProducts = (req,res) =>
    {
        res.json(Products.getAll());
    }

//GET /Products/:productID

const getProductbyID = (req,res) =>
    {
        const productID = req.params.productID;
        const Product = Products.findOnebyID(productID);
        if(Product)
            {
                res.json(Product)
            }
        else
        {
            res.status(404).json({message:"Product not found."});
        }
    }

//POST /Products

const createProduct = (req,res) =>
    {
        console.log(req.body);
        const Product = Products.addOne({...req.body})
        if(Product)
            {
                res.status(201).json(Product);
            }
        else
        {
            res.status(500).json({message:"Product could not be created."});
        }
    }

//PUT /Products/:productID

const updateProduct = (req,res) =>
    {
        const productID = req.params.productID;
        updatedProduct = Products.updateOnebyID(productID);
        if(updatedProduct)
            {
                res.json(updatedProduct);
            }
        else
        {
            res.status(404).json({message:"Product not found."});
        }
    }

//DELETE /Products/:productID

const deleteProduct = (req,res) =>
    {
        const productID = req.params.productID;
        deletedProduct = Products.deleteOnebyID(productID);
        if(deletedProduct)
            {
                res.status(204).send();
            }
        else
        {
            res.status(404).json({message:"Product not found."});
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