const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));