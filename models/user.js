'use strict';
const {
  Model,
	Sequelize
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
		id: {
			type: DataTypes.UUID,
			primaryKey: true,
			defaultValue: Sequelize.UUIDV4,
			allowNull: false,
		},
    first_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    last_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
    email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
    password:{
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone_number: {
			type: DataTypes.STRING,
		},
		type: {
			type: DataTypes.STRING,
			allowNull: false,
      defaultValue: 'user'
		},
  }, {
    sequelize,
    modelName: 'User',
		tableName: 'Users',
		paranoid: false,
		timestamps: true,
  });
  return User;
};
