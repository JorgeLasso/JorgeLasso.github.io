module.exports = (sequelize, Sequelize) => {
  const CRM = sequelize.define("crms", {
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
  });

  return CRM;
};
