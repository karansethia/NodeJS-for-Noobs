const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expHandlebars = require('express-handlebars'); //* unlike pug we have to import the express handlebar package as it it is more of external package than a pug

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// ! Below two lines of code are important if you want to use express handlebars
app.engine('hbs', expHandlebars());
app.set('view engine','hbs'); 
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) 
app.use('/admin',adminData.routes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000);