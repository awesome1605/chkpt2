var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});
/* GET services page. */
router.get('/ourServices', function(req, res, next) {
  res.render('ourServices', { title: 'Our Services' });
});
/* GET contact page. */
router.get('/contactUs', function(req, res, next) {
  res.render('contactUs', { title: 'Contact Us' });
});

module.exports = router;
