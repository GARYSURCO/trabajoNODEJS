const { Cliente } = require('../models');

exports.obtenerClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener clientes' });
  }
};
exports.obtenerClientePorId = async (req, res) => {
    try {
      const cliente = await Cliente.findByPk(req.params.id);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: 'Error al obtener cliente' });
    }
  };
exports.crearCliente = async (req, res) => {
  try {
    const cliente = await Cliente.create(req.body);
    res.status(201).json(cliente);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear cliente' });
  }
};
exports.actualizarCliente = async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
  
      await cliente.update(req.body);
      res.json(cliente);
    } catch (error) {
      res.status(500).json({ error: 'Error al actualizar cliente' });
    }
  };
  
  exports.eliminarCliente = async (req, res) => {
    try {
      const id = req.params.id;
      const cliente = await Cliente.findByPk(id);
      if (!cliente) return res.status(404).json({ error: 'Cliente no encontrado' });
  
      await cliente.destroy();
      res.json({ mensaje: 'Cliente eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ error: 'Error al eliminar cliente' });
    }
  };