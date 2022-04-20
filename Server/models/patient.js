'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Patient extends Model {  
    static associate(models) {

    }
  }
  Patient.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Patient',
  });
  return Patient;
};