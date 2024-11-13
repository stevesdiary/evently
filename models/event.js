'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Event.init({
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true,
			defaultValue: DataTypes.UUIDV4
		},
    event_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		location: {
			type: DataTypes.STRING,
			allowNull: false
		},
		venue: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false
		},
    description: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
		},
		start_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		end_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
		price: {
			type: DataTypes.NUMBER,
			allowNull: false,
			defaultValue: 0
		},
		discount: {
			type: DataTypes.DECIMAL(11, 2),
		},
		discounted_price: {
			type: DataTypes.NUMBER,
		},
		quantity: {
			type: DataTypes.NUMBER,
			allowNull: true,
		},
		start_time: {
			type: DataTypes.DATE,
			allowNull : false,
		},
		end_time: {
			type: DataTypes.DATE,
			allowNull: false
		},
		
  }, {
    sequelize,
    modelName: 'Event',
		tableName: 'Events',
		underscored: true,
  });
  return Event;
};