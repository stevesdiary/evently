'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Verification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Verification.init({
    id:  {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
      autoIncrement: true,
    },
    email:  {
			type: DataTypes.STRING,
      allowNull: false,
		},
    code:  {
			type: DataTypes.INTEGER,
      allowNull: false,
		},
    expires_at:  {
			type: DataTypes.DATE,
      allowNull: false,
      default: Date.now()
		},
  }, {
    sequelize,
    modelName: 'Verification',
    tableName: 'Verifications'
  });
  return Verification;
};