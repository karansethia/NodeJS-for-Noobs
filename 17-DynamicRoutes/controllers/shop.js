const Product = require('../models/product');
const Cart = require('../models/cart')


//* rendering all products using fetchall function in product model
exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/product-list', {
      prods: products,
      pageTitle: 'All Products',
      path: '/products'
    });
  });
};


//* rendering a single product page
exports.getSingleProduct = (req, res, next) => {

  //? Getting params from the link
  const productId = req.params.productId;
  Product.findById(productId, Product => {
    res.render('./shop/product-detail',{
      product: Product,
      pageTitle: Product.title,
      path: '/productId'
    })
  });

}
//* Home page 
exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render('shop/index', {
      prods: products,
      pageTitle: 'Shop',
      path: '/'
    });
  });
};


//* Cart page 
exports.getCart = (req, res, next) => {
  res.render('shop/cart', {
    path: '/cart',
    pageTitle: 'Your Cart'
  });
};


exports.postCart = (req, res, next) => {
  const prodId = req.body.productId;
  Product.findById(prodId, product => {
    Cart.addProduct(prodId, product.price);
  });
  res.redirect('/cart');
};


//* Orders page 
exports.getOrders = (req, res, next) => {
  res.render('shop/orders', {
    path: '/orders',
    pageTitle: 'Your Orders'
  });
};


//* Checkout page 
exports.getCheckout = (req, res, next) => {
  res.render('shop/checkout', {
    path: '/checkout',
    pageTitle: 'Checkout'
  });
};
