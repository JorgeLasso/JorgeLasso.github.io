const env = require("./env.js");

const Sequelize = require("sequelize-oracle");
const oracledb = require("oracledb");
oracledb.initOracleClient({ libDir: "C:\\instantclient_21_7" });
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.CRM = require("../models/crm.model.js")(sequelize, Sequelize);

module.exports = db;
