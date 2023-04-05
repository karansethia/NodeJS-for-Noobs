const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// importing routes
const home = require('./routes/home');
const users = require('./routes/users')

const app = express();

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

app.use(users);
app.use('/admin',home.routes)

app.use((req,res,next) => {
    res.render('404', {pageTitle: 'Page not found'})
})

app.listen(3100)

