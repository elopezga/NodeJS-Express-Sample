var express = require('express');
var router = express.Router();

router.get('/static-content', function(req, res){
    res.render('static-content');
});

module.exports = router;
