const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('RUTA RAIZ OK');
});

app.get('/usuarios', (req, res) => {
  res.json({ mensaje: 'Lista de usuarios ficticios' });
});

app.get('/productos', (req, res) => {
  res.json({ mensaje: 'Lista de productos ficticios' });
});

app.get('/perfil', (req, res) => {
  res.json({ mensaje: 'Perfil de usuario ficticio' });
});

app.get('/info', (req, res) => {
  res.json({ mensaje: 'Información general del servidor' });
});

app.listen(PORT, () => {
  console.log(`Servidor activo en el puerto ${PORT}`);
});
