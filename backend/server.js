const express = require("express");
const app = express();
const PORT = 3000;

app.listen(PORT, function () {
  console.log("Servidor a correr na porta ", PORT);
});

app.get("/health", function (req, res) {
  console.log("Mensagem recebida no health");
  res.json({
    ok: true,
    message: "Servidor ativo",
  });
});
