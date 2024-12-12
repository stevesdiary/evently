'use strict';
const {
  Sequelize,
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rsvp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Rsvp.init({
    id:  {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUID,
			allowNull: false,
		},
    user_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    event_id: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    start_date: {
			type: DataTypes.DATE,
			allowNull: false,
		},
    end_date: {
      type: DataTypes.DATE,
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    end_time: {
      type: DataTypes.DATE,
    },
    price: {
      type: DataTypes.NUMBER,
    },
    venue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_status: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
  }, {
    sequelize,
    modelName: 'RSVP',
    tableName: 'RSVPs',
    paranoid: false,
  });
  return Rsvp;
};