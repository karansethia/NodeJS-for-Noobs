const express = require('express');

const router = express.Router();

export const users = [];

router.get('/',(req,res,next) => {
    console.log("inside home");
    res.render('home',{
        pageTitle: "Home",
        path: '/admin/'
    })
});
router.post('/',(req,res,next) => {
    console.log(req.body);
    users.push(req.body);
    console.log(users);
    res.redirect('/users')
});


module.exports=router;
// module.exports = users;