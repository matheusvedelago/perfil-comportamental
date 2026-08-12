const express = require("express");

const router = express.Router();

router.get("/health", function (req, res) {
  res.json({
    ok: true,
    message: "Servidor ativo",
  });
});

module.exports = router;
