'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      Pedido.belongsTo(models.Cliente, { foreignKey: 'clienteId' });
    }
  }

  Pedido.init(
    {
      fecha: DataTypes.DATE,
      total: DataTypes.FLOAT,
      clienteId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Pedido',
    }
  );

  return Pedido;
};
