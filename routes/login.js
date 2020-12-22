const express = require('express');
const router = express.Router();
const { newUser } = require("../models/newuser");

router.post('/login', async(req,res) =>{

  let userid = req.body.username
  let user = await newUser.findOne({ username: userid });
    
  if(user){
    console.log(user.username + " is login");
    res.send("user");
    }

  if(!user&&userid=="Admin"){     
    console.log( "Admin is login " );
    res.send("ok") ;
  }

  else {
    console.log("invalid username " + res.body);
    return res.status(400).send("Invalid username or password.");
  }
     
});

module.exports = router;




