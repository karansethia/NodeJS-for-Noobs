const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();
app.use(bodyParser.urlencoded({extended: true})); 

//? NodeJS doesnt allow user to access the file system but of we want to show some content or codes that need to be seen or used like a css stylesheet we use express.static()
//? This object statically serves content to the user
app.use(express.static(path.join(__dirname,'public'))) //! DO keep in mind that when you are mentioning the public folder here then there is no need to use public inside path to the files inside public(just act like you are already in public folder => used in shop.html )
app.use('/admin',adminRoutes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'))
})
app.listen(3000);