const express = require('express');
const router = express.Router();

const {
  obtenerClientes,
  obtenerClientePorId,
  crearCliente,
  actualizarCliente,
  eliminarCliente
} = require('../controllers/cliente.controler');

// Rutas CRUD
router.get('/clientes', obtenerClientes);
router.get('/clientes/:id', obtenerClientePorId);
router.post('/clientes', crearCliente);
router.put('/clientes/:id', actualizarCliente);
router.delete('/clientes/:id', eliminarCliente); // 👈 ESTA ES LA IMPORTANTE

module.exports = router;
