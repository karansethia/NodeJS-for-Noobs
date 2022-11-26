const express = require('express');

const app = express();

/* app.use('/message',(req,res,next) => {
    console.log("inside /message path");
    res.send('<h1>Hi I am Karan</h1>')
});
app.use('/reply',(req,res,next) => {
    console.log("inside /reply path");
    res.send('<h1>Hi karan thank you for your efforts</h1>')
}); */
app.use('/users',(req,res,next) => {
    console.log("inside /users path");
    res.send('<h1>Hi user nice work there</h1>')
});
app.use('/reply',(req,res,next) => {
    console.log("inside /reply path");
    res.send('<h1>in the default response</h1>')
});
app.listen(3000)