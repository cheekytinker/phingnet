var assert = require('assert');
var express = require('express');
var status = require('http-status');
var superagent = require('superagent');
var wagner = require('wagner-core');
var app = express();
app.use('/api/v1', require('../../api')(wagner));

var URL_ROOT = 'http://localhost:3000/api/v1';


describe('when-creating-phings', function() {
  var server;
  var Phing;

  before(function() {

    server = app.listen(3000);
  });

  after(function() {
    // Shut the server down when we're done
    server.close();
  });

  beforeEach(function(done) {
    done();
  });

  it('should return status code 201', function(done) {
    var url = URL_ROOT + '/phing';
    superagent.
      get(url).
      end(function(error, res) {
        assert.ifError(error);
        assert.equal(res.status, status.CREATED);
        done();
      });
  });

  it('should return key of created item', function(done) {
    var url = URL_ROOT + '/phing';
    superagent.
      get(url).
      end(function(error, res) {
        assert.ifError(error);
        assert.equal(res.body.key, "123");
        done();
      });
  });

});
