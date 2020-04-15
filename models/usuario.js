'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nome: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    // associations can be defined here
    Usuario.hasOne(models.Token);
  };
  return Usuario;
};