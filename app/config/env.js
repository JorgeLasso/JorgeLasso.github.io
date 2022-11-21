const env = {
  database: "csv",
  username: "root",
  password: "Acceso.123",
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
