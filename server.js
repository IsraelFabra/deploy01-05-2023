// importar el modulo de "express" de la carpeta "node_modules"
const express = require('express');
// Creamos un objeto "app" a traves del modulo (clase) de express
const app = new express();
// puerto por el que el servidor local escucha. "http://localhost:3000"
const port = 3000;
// rutas: Se establecen las rutas configuradas para este server, mediante los métodos GET, POST, PUT, DELETE.
// Estos métodos gestionan las peticiones (req) y respuestas (res) mediante un callback
// Ruta 1- En este caso devuelve al cliente un texto plano "Hello World!"
app.get('/hello_world', (req, res) => {
  res.send('Hello World !')
});
// Ruta 2- En este caso devuelve al cliente un archivo html
// __dirname: ruta absoluta del server donde se alberga el proyecto
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
});

// middleware que configura el directorio de los archivos estáticos (img, css, js....)
app.use(express.static('public'));

// Crea el webserver y escucha por el puerto 3000, devolviendo un mensaje por consola
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});



