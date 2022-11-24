let express = require("express");
let router = express.Router();
let upload = require("../config/multer.config.js");
import db from "../config/db.config.js";

const csvWorker = require("../controllers/csv.controller.js");

let path = __basedir + "/views/";

router.get("/", (req, res) => {
  console.log("__basedir" + __basedir);
  res.sendFile(path + "index.html");
});

// router.post("/api/file/upload", upload.single("file"), csvWorker.uploadFile);
router.post("/api/file/upload", async (req, res, next) => {
  try {
    let { data } = req.body;
    console.log(data);
    let insert = await db.query().insert({
      id: data.id,
      nombres: data.nombres,
      apellidos: data.apellidos,
      telefonos: data.telefonos,
      direcciones: data.direcciones,
    });

    res.json(insert);
  } catch (error) {
    next(error);
  }
});
module.exports = router;
