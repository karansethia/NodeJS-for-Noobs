const express = require('express');
const path = require('path');
// const adminRoutes = require('./admin');
const productsController = require('../controllers/products')
const router = express.Router();

//? If we use router.get instead of router.use then the browser will redirect here only on exact match of '/' path
router.get('/', productsController.addProducts);

router.get('/products');

router.get('/cart');

router.get('/checkout');

module.exports = router;