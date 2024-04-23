
const productController = require("../controllers/productController")

const express = require('express');
const router = express.Router();

router.get('/products', productController.getProducts);

module.exports = router;