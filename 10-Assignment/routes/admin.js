const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','users.html'));
});
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','home.html'));
});
 
//? seperating export statements for data and routes
exports.routes = router;
exports.products = products;