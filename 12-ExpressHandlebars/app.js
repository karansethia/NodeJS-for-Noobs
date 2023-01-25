const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const expressHbs = require('express-handlebars'); //* unlike pug we have to import the express handlebar package as it it is more of external package than a pug

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

// ! Below two lines of code are important if you want to use express handlebars
app.engine(
    'hbs',
    expressHbs.engine({
      defaultLayout: 'main-layout',  // Adds default layout for every template
      extname: 'hbs',       // extension name for the handlebar layout file only
      layoutsDir: '12-ExpressHandlebars/views/layouts'  // points to the directory where the layout is
    })
  );
app.set('view engine','hbs');  // declaring handlebar as the templating engine for our app
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended: true})); 

app.use(express.static(path.join(__dirname,'public'))) 
app.use('/admin',adminData.routes) 
app.use(shopRoutes)


app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404',{ pageTitle: 'NO page found'})
})
app.listen(3000);