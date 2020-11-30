const mongoose = require("mongoose");

const newuserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
     
    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required:true,
        minlength: 5,
        maxlength: 255,
        unique: true
    }


});

const newUser = mongoose.model("newUser", newuserSchema);
exports.newUser = newUser;