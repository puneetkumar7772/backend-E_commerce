const express = require('express');
const sellerController = require('../controller/sellerregisterControler');

const router = express.Router();
router.post('/sellerregister', sellerController.registerSeller);
router.post('/sellerlogin',sellerController.sellerLogin);
router.get('/allSeller',sellerController.getAllSeller);
router.delete('/deleteSeller/:id',sellerController.deleteSeller);



module.exports = router;
