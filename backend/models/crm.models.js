const Sequelize = require("sequelize-oracle");

module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "crm",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nombres: {
        type: Sequelize.STRING,
      },
      apellidos: {
        type: Sequelize.STRING,
      },
      telefonos: {
        type: Sequelize.INTEGER,
      },
      direcciones: {
        type: Sequelize.STRING,
      },
    },
    {
      undescored: true,
      paranoid: true,
    }
  );
};
