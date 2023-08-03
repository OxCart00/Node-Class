const express = require('express');
const app = express();
const port = 3000;

app.get('/verificar-edad', (req, res) => {
  const edad = parseInt(req.query.edad);
  if (isNaN(edad)) {
    res.status(200).send('La edad debe ser un número válido.');
  } else {
    const mensaje = edad >= 18 ? 'La persona es mayor de edad.' : 'La persona es menor de edad.';
    res.status(200).send(mensaje);
  }
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${port}`);
});