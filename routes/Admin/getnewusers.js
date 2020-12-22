const express = require('express');
const { newUser } = require('../../models/newuser');
const router = express.Router();

router.post('/getnewusers', async(req,res) =>{

    console.log(req.body)

    let allnewusers = await newUser.find();
    console.log(allnewusers)
    res.status(200).send(allnewusers);
});

module.exports = router;

