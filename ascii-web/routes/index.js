var express = require('express');
var router = express.Router();

var fs = require('fs');

text = fs.readFileSync('/home/dev/python_project/newOutput.txt');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', ascii:text});
});

module.exports = router;
