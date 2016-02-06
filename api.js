var bodyparser = require('body-parser');
var express = require('express');
var status = require('http-status');
var _ = require('underscore');

module.exports = function(wagner) {
  var api = express.Router();

  api.use(bodyparser.json());

  api.get('/phing', wagner.invoke(function() {
    return function(req, res) {
      res.json({  });
    };
  }));
}
