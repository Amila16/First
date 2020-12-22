const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const auth = require("./routes/login");
const register = require("./routes/register");
const upload = require("./routes/upload");
const getnewusers = require("./routes/Admin/getnewusers")
const port = process.env.port || 5000;



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/project-management", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// app.use(function(req,res,next){
//    console.log(Date.now());
//    console.log(req.body);
//    next();
// });

app.use("/", auth);
app.use("/new", register);
app.use("/", upload);
app.use("/", getnewusers)

app.listen(port, () =>{
    console.log('server start on port' +port );
});












