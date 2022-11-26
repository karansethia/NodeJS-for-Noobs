const express = require('express');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({extended: true})); //? this register a middleware that will parse the body for us that we had to do in vanilla nodejs



app.use('/add-product',(req,res,next) => {
    console.log("inside /add-product path");
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Send</button</form>')
});

//? we are using app.post instead of app.use to limit the user to get requests only
//? hence if user manually types /product in the url he will be redirected not to /product but to '/' path
app.post('/product',(req,res,next) => {
    console.log("inside /products path");
    console.log(req.body);  //? by default this will return undefined because we are not parsing the body
    res.redirect('/')  //? express function that will redirect to the specified path
});
app.use('/',(req,res,next) => {
    console.log("inside / path");
    res.send('<h1>in the default response</h1>')
});
app.listen(3000)