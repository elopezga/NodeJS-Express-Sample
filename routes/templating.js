var express = require('express');
var router = express.Router();

router.get('/templating', function(req, res){
    // Get URL parameters
    let dataParam = req.param('data');
    res.render('templating', {data: dataParam});
});

router.get('/templating/:data', function(req, res){
    // Get parameters from Routing
    let dataParam = req.params.data;
    res.render('templating', {data: dataParam});
})

module.exports = router;
