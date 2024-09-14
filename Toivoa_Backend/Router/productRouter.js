const express = require('express');
const router = express.Router();
const {
    getAllProducts,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/productController');

//GET /products
router.get('/',getAllProducts);

//GET /products/:productID
router.get('/:productID',getProductbyID);

//POST /products
router.post('/',createProduct);

//PUT /products/:productID
router.put('/:productID',updateProduct);

//DELETE /products/:productID
router.delete('/:productID',deleteProduct);

module.exports = router;