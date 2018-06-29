var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log(req);
  var headers = JSON.stringify(req.headers);
  console.log(req.headers);
  res.render('useragent', {header_info: headers});
});

module.exports = router;
