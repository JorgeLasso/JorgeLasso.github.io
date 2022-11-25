const express = require("express"),
  router = express.Router(),
  { _create } = require("../controllers/crm.controller");

router.post("/create", async (req, res) => {
  try {
    console.log(req.body);
    await _create(req.body);
    return res.status(201).json({
      status: "success",
      message: "Crm creado correctamente",
    });
  } catch (e) {
    return res.status(500).json(e.message);
  }
});

module.exports = router;
