var expect = require('chai').expect;
var request = require('request');

// offline classes
const FindCep = require('../models/findCEP');

// initiate server
var server = require('../bin/www');

/**
 * Carregando o servidor em tempo de execução
 */

describe('server response', () => {
  before(() => {
    server.listen(3000);
  });

  after(() => {
    server.close();
  });
});

/**
 * Testando a classe findCEP separadamente
 */

describe('Testing findCEP class', () => {

  it('should return a json data', function () {
    const getCEP = new FindCep('60440900');
    getCEP.then(result => expect(result).to.be.an('object'));
  });

  it('should check if exists a "end, bairro, cep, uf and cidade" properties', function (done) {
    const getCEP = new FindCep('60714903');
    getCEP.then(result => {
      expect(result).to.have.nested.property('return.end')
      expect(result).to.have.nested.property('return.bairro')
      expect(result).to.have.nested.property('return.cep')
      expect(result).to.have.nested.property('return.uf')
      expect(result).to.have.nested.property('return.cidade')
      done();
    }).catch(
      err => done(err)
    );
  });

  // usando async/await para esperar a promisse completar 
  it('should return something (just a example using async/await)', async () => {
    const getCEP = await new FindCep('60714903');
    expect(getCEP).to.have.nested.property('return.end');
    expect(getCEP).to.have.nested.property('return.bairro');
    expect(getCEP).to.have.nested.property('return.cep');
    expect(getCEP).to.have.nested.property('return.uf');
    expect(getCEP).to.have.nested.property('return.cidade');
  });

});

describe('Testing postal code API on server running', () => {

  it('should return 200', function (done) {
    request.get('http://localhost:3000/f/60714903', function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a json data', function (done) {
    request.get('http://localhost:3000/f/60714903', function (err, res, body) {
      expect(JSON.parse(res.body)).be.a('object');
      done();
    });
  });

  it('should check if exists a "end, bairro, cep, uf and cidade" properties', function (done) {
    request.get('http://localhost:3000/f/60714903', function (err, res, body) {
      data = JSON.parse(res.body)
      expect(data).to.have.nested.property('return.end')
      expect(data).to.have.nested.property('return.bairro')
      expect(data).to.have.nested.property('return.cep')
      expect(data).to.have.nested.property('return.uf')
      expect(data).to.have.nested.property('return.cidade')
      done();
    });
  });
});
