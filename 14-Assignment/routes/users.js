const express = require('express');

import { users } from './home';

const router = express.Router();

router.get('/users',(req,res,next) => {
    console.log(users);
    res.render('users',{
        pageTitle : 'Users List',
        // userList : usersData.users
    })
})


module.exports = router;