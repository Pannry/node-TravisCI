const soap = require('soap');

const url = 'https://apps.correios.com.br/SigepMasterJPA/AtendeClienteService/AtendeCliente?wsdl';

var FindCep = function FindCep(_cep) {
  return new Promise((resolve) => {
    soap.createClient(url, function (err, client) {
      if (err)
        console.error(err);
      else
        client.consultaCEP(
          { cep: _cep },
          function (err2, result) {
            if (err2)
              console.error(err2);
            else
              resolve(result);
          }
        );
    });
  });
}

module.exports = FindCep;