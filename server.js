const express = require('express');
const path = require('path');
const app = express();

// Sirve los archivos estáticos de la carpeta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Si tienes un archivo HTML, sirve el archivo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
