const express = require('express');
const { newUser } = require('../../models/newuser');
const router = express.Router();

router.get('/getnewusers', async(req,res) =>{

    console.log(req.body)
try {
    let allnewusers = await newUser.find({});
    console.log(allnewusers)
    res.status(200).send(allnewusers);
} catch (error) {
    console.log(error)
}
    
});

module.exports = router;

