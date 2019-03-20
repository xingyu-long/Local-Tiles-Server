// Filename: api-routes.js

// Initialize express router
let router = require('express').Router();

// loading geoip-lite
var geoip = require('geoip-lite');

//解决跨域问题
router.all('/', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Set default API response
router.get('/', function (req, res) {
    // 测试ip 
    var ip = "110.127.255.255";
    // var ip = req.connection.remoteAddress;
    // ip = ip.split(':').pop();
    // console.log("ip: "+ ip);
    var geo = geoip.lookup(ip);
    // console.log(geo);
    // console.log("x-forwarded-for: " +  req.headers['x-forwarded-for'] );
    // console.log("x-real-ip: " + req.header('x-real-ip'));
    res.json({
        status: 'Its Working',
        message: geo,
        name: req.hostname,
        ip: req.ip,
    });
});

// Export API routes
module.exports = router;
