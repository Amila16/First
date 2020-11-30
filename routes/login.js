const express = require('express');
const router = express.Router();
const { newUser } = require("../models/newuser");


router.post('/login', async(req,res) =>{

  let user = await newUser.findOne({ username: req.body.username });
  
  console.log(req.body)

  if (!user){
    console.log("invalid username " + res.body);
    return res.status(400).send("Invalid username or password.");
  }

  if(user){    
    console.log("login is done " + res.body);
    res.send("ok") 
  }

});



module.exports = router;




