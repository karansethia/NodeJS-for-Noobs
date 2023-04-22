//? While adding dynamic params make sure that the links with dynamic params are placed below the links without params
//? If we have '/products/delete' and '/products/:productId' put the delete link above the link with dynamic param otherwise express will treat /delete as a dynamic param

const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

//* We tell express that there will be a variable inside the link by addiing a colon followed by any variable name
router.get('/products/:productId',shopController.getSingleProduct)  

router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
