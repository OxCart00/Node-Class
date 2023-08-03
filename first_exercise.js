const express = require('express');
const app = express();
const port = 3000;

app.get('/saludo', (req, res) => {
  const nombre = req.query.nombre || 'Invitado';
  res.status(200).send(`¡Hola, ${nombre}! Bienvenido al servidor HTTP en Node.js.`);
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

app.listen(port, () => {
  console.log(`Servidor HTTP escuchando en http://localhost:${port}`);
});