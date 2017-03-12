var express = require('express');
var router = express.Router();
var getIP = require('ipware')().get_ip;
/* GET home page. */
router.get('/', function(req, res, next) {
  var ip = getIP(req).clientIp;
  var os = req.headers['user-agent'].split("(")[1].split(")")[0];
  var language = req.headers['accept-language'].split(",")[0];
  res.end(JSON.stringify({
    ipaddress: ip,
    language: language,
    software: os
  }));
});

module.exports = router;
