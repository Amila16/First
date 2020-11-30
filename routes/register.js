const express = require('express');
const router = express.Router();
const {newUser}= require('../models/newuser');


router.post('/register', (req,res) =>{
    console.log("registration is done"); 
    res.send('ok');

    newuser = new newUser({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        username: req.body.username,
        email: req.body.email,
        password: req.body.email 
      });

    newuser.save();
 
});



module.exports = router;
