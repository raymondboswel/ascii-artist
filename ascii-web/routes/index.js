var express = require('express');
var router = express.Router();

var fs = require('fs');
var app = express();
multer  = require('multer')

var busboy = require('connect-busboy');
//...




var resolutions = {"4":"4"};

console.log("Server side");

router.post('/', function(req, res) {
//Should use async, using sync as first iteration. This sortof works, but page load fails for a bit while execution is taking place.
    var propValue;
    console.log(req);
    console.log(req.files.userFile.path);
    partialPath = req.files.userFile.path;
    console.log(__dirname);
    pathElements = __dirname.split('/');
    newPath="";
    for(i=0; i<pathElements.length -1; i++)
    {
       newPath = newPath +'/' +pathElements[i];
     }
    newPath = newPath+'/'+partialPath;
    newPath = newPath.substring(1, newPath.length)
    
    console.log(newPath);
    var execSync = require ('exec-sync');
//    var v = execSync('python /home/dev/python_project/ascii_generator.py /home/dev/python_project/Bob_Marley.png 4 /home/dev/python_project/nodeOutput.txt' );
    var v = execSync('python /home/dev/python_project/ascii_generator.py ' + newPath +' 4 /home/dev/python_project/nodeOutput.txt' );
    text = fs.readFileSync('/home/dev/python_project/nodeOutput.txt');
    //console.log("posting...." + text);
   // text = "post";
    res.send(text);

});


/* GET home page. */
router.get('/', function(req, res, next) {
  text = "Result will be displayed here";
  res.render('index', { title: 'Express', ascii:text, scripts: ['javascripts/index.js']});
  console.log("Still server side");
});

module.exports = router;
