const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const webRoutes = require('./routes/web');
const productoRoutes = require('./routes/producto');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart')
const adminRoutes = require('./routes/admin');

app.use(webRoutes);
app.use(productoRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(adminRoutes);

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));