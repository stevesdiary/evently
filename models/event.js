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
		organizer_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
		},
		city: {
			type: DataTypes.STRING,
		},
		state: {
			type: DataTypes.STRING,
			allowNull: false
		},
		country: {
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
			type: DataTypes.DECIMAL(11, 2),
			allowNull: false,
			defaultValue: 0
		},
		discount: {
			type: DataTypes.DECIMAL(11, 2),
		},
		discounted_price: {
			type: DataTypes.DECIMAL(11, 2),
		},
		quantity: {
			type: DataTypes.INTEGER,
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
		theme: {
			type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
		},
		extra_info: {
			type: DataTypes.STRING,
			allowNull: true,
		}
  }, {
    sequelize,
    modelName: 'Event',
		tableName: 'Events',
		paranoid: false,
  });
  return Event;
};