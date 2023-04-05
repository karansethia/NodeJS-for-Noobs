const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error')


const app = express();

app.set('view engine','ejs');  // declaring ejs as the templating engine for our app
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) 
app.use('/admin',adminRoutes) 
app.use(shopRoutes)


app.use(errorController.get404);
app.listen(3000);