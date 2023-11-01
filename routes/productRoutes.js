const express = require('express');
const router = express.Router();
const upload=require('../middlware/uploadMiddleware')
const productController = require('../controller/addProductController');
// Route to create a new product
router.post('/products',upload.single("img"), productController.createProduct);
// router.post('/products', (req, res, next) => {
//     upload.single('img')(req, res, (err) => {
//       if (err) {
//         return res.status(400).json({ error: err.message });
//       }
//       // Continue with your controller logic here
//     });
//   });

module.exports = router;
