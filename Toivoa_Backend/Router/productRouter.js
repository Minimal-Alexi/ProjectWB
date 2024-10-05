const express = require('express');
const router = express.Router();
const {
    getProductsbyNumberorAll,
    getProductbyID,
    createProduct,
    updateProduct,
    deleteProduct,
    addComment,
    deleteComment
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

//POST /products/comments
router.post('/:productID/comments',addComment);

//DELETE /products/comments
router.delete('/:productID/comments',deleteComment);

module.exports = router;