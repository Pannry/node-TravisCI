
var express = require('express');
var router = express.Router();

var FindCep = require('../models/findCEP');

router.get('/:id', function (req, res, next) {
  const CepId = req.params.id;

  const getCEP = new FindCep(CepId);
  getCEP.then(result => res.send(result));

});

router.get('/', function (req, res, next) {
  res.send('<br><h2>Informe o cep na URL</h2>');
});

module.exports = router;
