const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const clienteRoutes = require('./routes/cliente.routes');
const pedidoRoutes = require('./routes/pedido.routes');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', clienteRoutes); // 👈 esto hace que tu ruta sea /api/clientes/:id
app.use('/api', pedidoRoutes);

module.exports = app;
