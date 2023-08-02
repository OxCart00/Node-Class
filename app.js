// app.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// Middleware para parsear los datos del cuerpo en las solicitudes POST
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Ruta principal
app.get('/', (req, res) => {
  res.send('¡Hola, bienvenido a mi servidor Express!');
});

// Ruta saludo
app.get('/saludo/:nombre', (req, res) => {
  const nombre = req.params.nombre;
  res.send(`Hola: ${nombre}!`);
});

// Ruta post
app.post('/post', (req, res) => {
  const data = req.body;
  res.json(data);
});

// Ruta no definida (404)
app.use((req, res) => {
  res.status(404).send('Error 404: Ruta no encontrada');
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor Express iniciado en el puerto ${PORT}`);
});