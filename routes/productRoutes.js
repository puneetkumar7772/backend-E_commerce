const express = require('express');
const router = express.Router();
const upload=require('../middlware/uploadMiddleware')
const productController = require('../controller/addProductController');
// Route to create a new product
router.post('/products',upload.single("img"), productController.createProduct);
module.exports = router;