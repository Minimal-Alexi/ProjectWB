const express = require('express');
const router = express.Router();
const {
    getProductsbyNumberorAll,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct
} = require('../Controller/productController');

//GET /products
router.get('/',getProductsbyNumberorAll);

//GET /products/:productID
router.get('/:productID',getProductbyID);

//POST /products
router.post('/',createProduct);

//PUT /products/:productID
router.put('/:productID',updateProduct);

//DELETE /products/:productID
router.delete('/:productID',deleteProduct);

module.exports = router;