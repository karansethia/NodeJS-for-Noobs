const express = require('express');
const bodyParser = require('body-parser')

//? Importing a local Module
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

//? Using local modules inside our app also make sure to use the module with default path '/' in the end so it doesnt stop other middleware modules 
app.use('/admin',adminRoutes)  //? on adding /admin the url after domain will begin with /admin. Eg- www.website.com/admin/add-product. EXpress will simply ignore this
app.use(shopRoutes)

//? redirecting to a 404 error or page not found response
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not found buddy</h1>')
})
app.listen(3000);