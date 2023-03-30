exports.getAddProduct = (req, res, next) => {  
    res.render('add-product',
    {pageTitle: 'Add-Product', 
    path: '/admin/add-product',
    formsCSS: true,
    productsCSS: true, 
    activeAddProduct: true
  })  
}

const products = [];

exports.postAddProduct = (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title}); //pushing the data recieved to the array
    res.redirect('/');  // this path can be found in shop.js
    console.log(products);
  }