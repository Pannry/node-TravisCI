// const chai = require('chai');
var request = require('request');
var expect = require('chai').expect
var server = require('../bin/www');

describe('server response', () => {
  before(() => {
    server.listen(3000);
  });

  after(() => {
    server.close();
  });
});

describe('Verify server disponibility', () => {
  it('should return 200', function (done) {
    request.get('http://localhost:3000', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

});
