const express = require('express');
const router = express.Router();

const {
  obtenerPedidos,
  obtenerPedidoPorId,
  crearPedido,
  actualizarPedido,
  eliminarPedido
} = require('../controllers/pedido.controler'); // Asegúrate de que el nombre del archivo sea correcto

router.get('/pedidos', obtenerPedidos);
router.get('/pedidos/:id', obtenerPedidoPorId);
router.post('/pedidos', crearPedido);
router.put('/pedidos/:id', actualizarPedido);
router.delete('/pedidos/:id', eliminarPedido);

module.exports = router;
