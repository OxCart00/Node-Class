const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON

app.use('/images', express.static('images'));

const tasks = [
  {
    "id": 3,
    "name": "Tarea 3",
    "task": "Descripción de la tarea 3"
  },
  {
    "id": 6,
    "name": "Tarea 6",
    "task": "Descripción de la tarea 6"
  }
]; 

// Ruta raíz
app.get('/', (req, res) => {
  res.send('¡Bienvenido al servidor HTTP usando Express!');
});

// Ruta "/task" GET
app.get('/task', (req, res) => {
  res.json(tasks);
});

// Ruta "/task" POST
app.post('/task', (req, res) => {
  const { id, name, task } = req.body;

  if (!id || !name || !task) {
    res.status(400).send('Campos id, name y task son requeridos');
    return;
  }

  tasks.push({ id, name, task });
  res.send('Nueva tarea agregada');
});

// Ruta "/image/:username"
app.get('/image/:username', (req, res) => {
  const { username } = req.params;
  if (username === 'ronny') {
    // Enviar la imagen desde la carpeta "images"
    res.sendFile(__dirname + '/images/ejemplo.jpg'); 
  } else {
    res.status(404).send('Página no encontrada');
  }
});

// Ruta para cualquier otra ruta no especificada
app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});