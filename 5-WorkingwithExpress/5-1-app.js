//! EXPRESS IS A PRODUCTION DEPENDENCY MAKE TO USE --SAVE FLAG AND NOT --SAVE-DEV
const express = require('express');

//const http = require('http');
const app = express();
console.log("working with express");

//? use allows use to add a new middleware function
app.use((req,res,next) => {  //? next is a function passed to the 'use' method to be executed to allow reques travel to another method 
    console.log("inside middleware");
    next();  //? this allows the request to proceed to next middleware otherwise it will skip that middleware
});
app.use((req,res,next) => { 
    console.log("inside second middleware");
    res.send('<h1>This message is from the second middleware</h1>'); //? res.send() is a special method of express that allows us to write html


    //? since we are not calling the next() function that means this is the last middleware that will be called
});
// const server = http.createServer(app);

// server.listen(3000); or we can use
app.listen(3000)