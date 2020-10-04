const express = require('express');
const evenOrOdd = require('./evenOrOdd');

const PORT = 80;
const HOST = '0.0.0.0';

const app = express();
app.get('/:numero', (req, res) => {
  const numero = req.params.numero;
  if (Number.isInteger(numero * 2)) {
    res.send(`Your number (${numero}) is ${evenOrOdd(numero) ? 'EVEN' : 'ODD'}`);
  } else {
    res.send("The param must be number type");
  }

});
app.get('/', (req, res) => {
  res.send('Write a number in url example: domain/2');
});

app.use(function (req, res, next) {
  respuesta = {
    error: true,
    codigo: 404,
    mensaje: 'URL no encontrada'
  };
  res.status(404).send(respuesta);
});

app.listen(PORT, HOST);
console.log("RUNNING")