const express = require('express');
const app = express();

app.use('/message',(req,res,next) => {
    res.send('<h1>this is the /message path</h1>')
});
//! we are adding /message path first and also not using the next() method because
//! => the requests are read from top to down so the /message path function will be read and not the default
//! => and since we are never using the next() function the program will never reach the default response

//? we can specify one or multiple paths in app.use() method (default path is '/')
app.use('/',(req,res,next) => {
    res.send('<h1>Using express for paths</h1>')
});
app.listen(3000)