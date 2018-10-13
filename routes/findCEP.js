const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

const soap = require('soap')
var express = require('express');
var router = express.Router();

router.get('/:id', function (req, res, next) {
  const CEP = req.params.id;

  soap.createClient(url, (err, client) => {
    if (err) console.log(err);
    else {
      client.consultaCEP({
        cep: CEP
      }, (err, result) => {
        res.send(result);
      });
    }
  });


});

module.exports = router;
