'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ticket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Ticket.init({
    event_id: DataTypes.STRING,
    user_id: DataTypes.STRING,
    price: DataTypes.NUMBER,
    status: DataTypes.STRING,
    qr_code_url: DataTypes.STRING,
    purchase_date: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Ticket',
  });
  return Ticket;
};