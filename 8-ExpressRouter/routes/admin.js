const express = require('express');
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



router.get('/add-product',(req,res,next) => {
        console.log("inside /add-product path");
        res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><button type="submit">Send</button</form>')
    });
router.post('/product',(req,res,next) => {
    console.log("inside /products path");
    console.log(req.body); 
    res.redirect('/');
});

module.exports = router;
