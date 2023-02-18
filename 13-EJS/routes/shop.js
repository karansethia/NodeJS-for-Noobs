const express = require('express');
const path = require('path');
const adminData = require('./admin')
const router = express.Router();

//? If we use router.get instead of router.use then the browser will redirect here only on exact match of '/' path
router.get('/', (req, res, next) => {
    console.log("inside shop.js");
    const products = adminData.products;
    // console.log(products);
    res.render('shop', {
        Products: products, pageTitle: 'Shop/Home', 
        path: '/'
    });
});

module.exports = router;