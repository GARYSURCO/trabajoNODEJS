// controllers/pedido.controler.js
const { Pedido } = require('../models');

exports.obtenerPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.json(pedidos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener pedidos' });
  }
};

exports.obtenerPedidoPorId = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el pedido' });
  }
};

exports.crearPedido = async (req, res) => {
  try {
    const pedido = await Pedido.create(req.body);
    res.status(201).json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear pedido' });
  }
};

exports.actualizarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    await pedido.update(req.body);
    res.json(pedido);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar pedido' });
  }
};

exports.eliminarPedido = async (req, res) => {
  try {
    const pedido = await Pedido.findByPk(req.params.id);
    if (!pedido) return res.status(404).json({ error: 'Pedido no encontrado' });
    await pedido.destroy();
    res.json({ mensaje: 'Pedido eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar pedido' });
  }
};
