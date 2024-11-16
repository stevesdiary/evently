'use strict';
const Sequelize = require('sequelize');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Organizer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Organizer.init({
    id: {
			type: DataTypes.UUID,
			primaryKey: true,
			allowNull: false,
			defaultValue: DataTypes.UUIDV4
		},
    first_name: {
			type: DataTypes.STRING,
			allowNull: false
		},
    last_name: {
			type: DataTypes.STRING,
			allowNull: true
		},
    email: {
			type: DataTypes.STRING,
			allowNull: false
		},
    password: {
			type: DataTypes.STRING,
			allowNull: false
		},
    phone_number: {
			type: DataTypes.BIGINT,
			allowNull: false
		},
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'organizer'
    },
  }, {
    sequelize,
    modelName: 'Organizer',
    tableName: 'Organizers',
    paranoid: false,
    underscored: true,
    updatedAt: 'updated_at',
    createdAt: 'created_at',
  });
  return Organizer;
};