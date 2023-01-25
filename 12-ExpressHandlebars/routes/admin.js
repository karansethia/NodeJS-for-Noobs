const express = require('express');
const path = require('path')
const router = express.Router();

const rootDir = require('../util/path');

const products = [];

//! /admin/add-product => GET => from this the user is being redirected to add-product.html (or you can say user is trying to GET to a certain page by requesting)
router.get('/add-product', (req, res, next) => {
    res.render('add-product',{pageTitle: 'Add-Product', 
    path: '/admin/add-product',
    formsCSS: true, 
    productCSS: true, 
    activeAddProduct: true})  //! path in this object can be anything
  });
  
  //! /admin/add-product => POST => from this the user is submitting an input and being redirected to another page via shop.js
  router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title}); //pushing the data recieved to the array
    res.redirect('/');  // this path can be found in shop.js
    console.log(products);
  });

exports.routes = router;
exports.products = products;