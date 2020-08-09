const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const cookies = require('cookie-parser');

const userMiddleware = require('./middlewares/user');
const categoriasMiddleware = require('./middlewares/categorias');

app.set('view engine','ejs');

app.use(express.static(path.resolve(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({secret: 'winehouse', resave: true, saveUninitialized: true}));
app.use(cookies());

//Middleware propio

app.use(userMiddleware);
app.use(categoriasMiddleware);

//Rutas
const webRoutes = require('./routes/web');
const productoRoutes = require('./routes/producto');
const userRoutes = require('./routes/user');
const cartRoutes = require('./routes/cart')
const adminProductRoutes = require('./routes/adminProduct');
const adminUserRoutes = require('./routes/adminUser');




app.use(webRoutes);
app.use(productoRoutes);
app.use(userRoutes);
app.use(cartRoutes);
app.use(adminProductRoutes);
app.use(adminUserRoutes);

app.listen(3000, 'localhost', ()=> console.log('Servidor corriendo en el puerto 3000'));