const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//? app.set function is a part of the Express.js framework and is used to set a value for a key in the Express.js app. This value can be retrieved later using app.get.
app.set('view engine', 'pug'); //* this code tell express that there is a template engine nvolved that must be used to render dynamic content
app.set('views', path.join(__dirname, 'views')) //* this is the location of the templates

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) 
app.use('/admin',adminData.routes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000);