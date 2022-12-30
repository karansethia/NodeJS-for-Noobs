//! EXPRESS IS A PRODUCTION DEPENDENCY MAKE TO USE --SAVE FLAG AND NOT --SAVE-DEV WHILE INSTALLING
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
app.listen(3000);

//By using this code you will notice that the console.log is repeated twice because your 
//browser automatically makes a request for /favicon.ico, and the request falls through
// to your default handler at the bottom. So the browser makes a request, which passes
// through your middleware, then you make a request by requesting the page itself. 
// for more details and solution check this link - https://stackoverflow.com/questions/35408729/express-js-prevent-get-favicon-ico/35408810#35408810