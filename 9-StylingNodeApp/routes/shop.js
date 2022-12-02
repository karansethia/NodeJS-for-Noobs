const express = require('express');
const path = require('path');
const router = express.Router();

//? If we use router.get instead of router.use then the browser will redirect here only on exact match of '/' path
router.get('/',(req,res,next) => {
    console.log("inside / path");
    // res.send('<h1>in the default response</h1>');
    //? Using sendfile to send html
    // ! res.sendFile('./views/shop.html') => this will not work since / in here points towards the root directory of the computer
    res.sendFile(path.join(__dirname,'../','views','shop.html'))
});

module.exports = router;