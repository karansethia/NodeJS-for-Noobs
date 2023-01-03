const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) //! DO keep in mind that when you are mentioning the public folder here then there is no need to use public inside path to the files inside public(just act like you are already in public folder => used in shop.html )
app.use('/admin',adminData.routes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000);