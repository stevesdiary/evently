'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Payment.init({
    id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
    full_name: {
			type: DataTypes.STRING,
		},
    email: {
			type: DataTypes.STRING,
		},
    amount: {
			type: DataTypes.STRING,
		},
    event_id: {
			type: DataTypes.STRING,
		},
    method: {
			type: DataTypes.STRING,
		},
  }, {
    sequelize,
    modelName: 'Payment',
    tableName: 'Payments',
    timestamps: false,
  });
  return Payment;
};