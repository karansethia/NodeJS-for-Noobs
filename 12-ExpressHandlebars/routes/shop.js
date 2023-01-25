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
        path: '/', 
        hasProducts: products.length > 0,  //? We add a variable hasProducts to check whether the product list is empty or not, the variable passes true or false value to the template
        activeShop: true, //? this variable passed to handlebar to set css class as "active"
        productCSS: true //? this variable passed to handlebar to include the product css file
    });
});

module.exports = router;