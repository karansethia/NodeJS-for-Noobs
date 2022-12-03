const express = require('express');
const path = require('path');

const router = express.Router();

const rootDir = require('../util/path');


router.get('/users', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','users.html'));
});
router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','home.html'));
});
  
module.exports = router;