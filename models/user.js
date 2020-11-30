const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
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
     // unique: true
    }
  });

  const User = mongoose.model("User", userSchema);

  exports.User = User;