const env = {
  database: "xepdb1",
  username: "demouser",
  password: "demouser",
  host: "localhost",
  dialect: "oracle",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

module.exports = env;
