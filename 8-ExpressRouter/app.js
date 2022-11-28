const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 



app.use('/add-product',(req,res,next) => {
    console.log("inside /add-product path");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button</form>')
});

app.post('/product',(req,res,next) => {
    console.log("inside /products path");
    console.log(req.body); 
    res.redirect('/');
});
app.use('/',(req,res,next) => {
    console.log("inside / path");
    res.send('<h1>in the default response</h1>');
});
app.listen(3000);