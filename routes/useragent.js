var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var header = req;
  console.log(header);
  res.render('useragent', {header_info: header});
});

module.exports = router;
