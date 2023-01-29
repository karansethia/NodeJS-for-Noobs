const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine','ejs');  // declaring ejs as the templating engine for our app
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) 
app.use('/admin',adminData.routes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404',{ pageTitle: 'No page found'})
})
app.listen(3000);