const port = process.env.PORT || 8080,
  express = require("express"),
  app = express(),
  db = require("./models");
(cors = require("cors")), (bodyParser = require("body-parser"));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", require("./routes/crm.routes"));

app.listen(port, () => {
  console.log(`Servidor escuchando en puerto ${port}`);
});

db.sequelize
  .sync({ force: false })
  .then(() => console.log("Conectado a la base de datos"))
  .catch((err) => console.log(err));
