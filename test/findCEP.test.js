var expect = require('chai').expect
const cep = require('../routes/cep');

var request = require('request');
var server = require('../bin/www');

describe('server response', () => {
  before(() => {
    server.listen(3000);
  });

  after(() => {
    server.close();
  });
});

describe('Testing findCEP class', () => {

  it('should return a json data', function (done) {
    //create object
    //use object
    done();
  });

  it('should return a "end, bairro, cep, uf and city" data', function (done) {
    // request.get('http://localhost:3000/f/60440900', function (err, res, body) {
    done();
    // });
  });

});

describe('Testing postal code API on server running', () => {

  it('should return 200', function (done) {
    request.get('http://localhost:3000/f/60440900', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a json data', function (done) {
    // request.get('http://localhost:3000/f/60440900', function (err, res, body) {
    done();
    // });
  });

  it('should return a "end, bairro, cep, uf and city" data', function (done) {
    // request.get('http://localhost:3000/f/60440900', function (err, res, body) {
    done();
    // });
  });
});

//60714903