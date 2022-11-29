const express = require('express');

const router = express.Router();

//? If we use router.get instead of router.use then the browser will redirect here only on exact match of '/' path
router.get('/',(req,res,next) => {
    console.log("inside / path");
    res.send('<h1>in the default response</h1>');
});

module.exports = router;