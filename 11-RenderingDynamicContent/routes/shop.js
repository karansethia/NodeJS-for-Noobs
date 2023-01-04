const express = require('express');
const path = require('path');
const adminData = require('./admin')
const router = express.Router();

//? If we use router.get instead of router.use then the browser will redirect here only on exact match of '/' path
router.get('/',(req,res,next) => {
    console.log("inside shop.js");
    // console.log(adminData.products);
     //res.sendFile(path.join(__dirname,'../','views','shop.html'))
     const products = adminData.products
    res.render('shop',{Products : products});  //? render method is an express method that uses default templating engine and then returns the specified template and also allows dynamic variables to be entered
    //? Also since we set the html and pug files will come from views folder using app.set() we donot need to specify the path
});

module.exports = router;