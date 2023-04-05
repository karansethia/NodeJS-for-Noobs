const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products');

// router.get('/add-product', (req, res, next) => {  
//   res.render('add-product',
//   {pageTitle: 'Add-Product', 
//   path: '/admin/add-product',
//   formsCSS: true,
//   activeAddProduct: true
//   })  
// });
//? We will seperate the 'IN-BETWEEN' logic or the function that binds data and view in a seperate file 
//? according to entity (in this case a product) or a functionality
router.get('/add-product', productsController.getAddProductPage);
  

router.post('/add-product', productsController.postAddProduct);

module.exports = router;