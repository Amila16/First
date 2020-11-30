const  express = require('express');
const app = express();
const router = express.Router();
const multer = require('multer')
const cors = require('cors');

app.use(cors())
console.log("inside the upload file")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, './public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})
const upload = multer({ storage: storage }).single('file')


app.post('/upload',upload,function(req, res) {

    const filePost = req.file.file

    if(!filePost)
    {
        console.log("not uploaded")
    }
    else{
        console.log(filePost);
    }

    // upload(req, res, function (err) {
    //        if (err instanceof multer.MulterError) {
    //            return res.status(500).json(err)
    //        } else if (err) {
    //            return res.status(500).json(err)
    //        }
    //   return res.status(200).send(req.file)

    // })

    // if(upload){
    //    console.log(req.file); 
    // }

});

module.exports = router;