const Product = require('../models/product')

exports.getAddProductPage = (req, res, next) => {  
    res.render('admin/add-product',
    {
      pageTitle: 'Add-Product', 
      path: '/admin/add-product',
      formsCSS: true,
      productsCSS: true, 
      activeAddProduct: true
  })  
}


exports.postAddProduct = (req, res, next) => {
    // products.push({title: req.body.title});
    const product = new Product(req.body.title) //* Creating new object for a product
    product.save()
    res.redirect('/');  // this path can be found in shop.js
  }

exports.addProducts = (req, res, next) => {
  const Products = Product.fetchAll();
  res.render('shop/product-list', {
  Products: products,
  pageTitle: 'Shop/Home', 
  path: '/',
  activeShop: true,
  productsCSS: true
  });
}