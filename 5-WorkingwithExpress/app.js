//! EXPRESS IS A PRODUCTION DEPENDENCY MAKE TO USE --SAVE FLAG AND NOT --SAVE-DEV
const express = require('express');

const http = require('http');
const app = express();
console.log("working with express");

const server = http.createServer(app);

server.listen(3000);