var express = require('express');
var router = express.Router();

var fs = require('fs');
var app = require('../app');
var resolutions = {"4":"4"};


router.post('/', function(req, res) {
//Should use async, using sync as first iteration. This sortof works, but page load fails for a bit while execution is taking place.
    var execSync = require ('exec-sync');
    var v = execSync('python /home/dev/python_project/ascii_generator.py /home/dev/python_project/Bob_Marley.png 4 /home/dev/python_project/nodeOutput.txt' );
    text = fs.readFileSync('/home/dev/python_project/nodeOutput.txt');
    res.end(text);

});
/* GET home page. */
router.get('/', function(req, res, next) {
  text = "Result will be displayed here";
  res.render('index', { title: 'Express', ascii:text});
});

module.exports = router;
