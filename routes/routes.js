var express = require('express');
var router = express.Router();

/* GET routes page */
router.get('/routes', function(req, res, next) {
  res.render('routes');
});

module.exports = router;
