const express = require('express');
const path = require('path')
//? We use express.Router() used to create a new router object. This function is used when you want to create a new router object in your program to handle requests.
const router = express.Router();


// router.get('/add-product',(req,res,next) => {
//     console.log("inside /add-product path");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button</form>')
// });
// router.post('/add-product',(req,res,next) => {
//     console.log("inside /add-product path");
//     res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button</form>')
// });
//? both routes above are same we can repeat the path here because we got different methods, get and post, so these will be two different routes too.


//! /admin/add-product => GET => from this the user is being redirected to add-product.html (or you can say user is trying to GET to a certain page by requesting)
router.get('/add-product', (req, res, next) => {
    // res.send(
    //   '<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
    // );

    // todo sending HTML pages instead
    res.sendFile(path.join(__dirname,'../','views','add-product.html'));
  });
  
  //! /admin/add-product => POST => from this the user is submitting an input and being redirected to another page via shop.js
  router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');  // this path can be found in shop.js
  });

module.exports = router;
