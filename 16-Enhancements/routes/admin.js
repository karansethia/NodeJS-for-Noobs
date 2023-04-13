const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

//* /admin/add-products => GET
router.get('/add-product', productsController.getAddProductPage);

//* /admin/products => GET
router.get('products');
  

router.post('/add-product', productsController.postAddProduct);

module.exports = router;