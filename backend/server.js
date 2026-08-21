const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = [
  "http://localhost:5500",
  "http://127.0.0.1:5500",
  "https://projetos.matheusvedelago.pt",
  "https://matheusvedelago.pt",
  "https://www.matheusvedelago.pt",
];
const assessmentRoutes = require("./src/routes/assessmentRoutes");
const systemRoutes = require("./src/routes/systemRoutes.js");

app.use(express.json());

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.use("/", systemRoutes);
app.use("/api/assessment", assessmentRoutes);

app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "INVALID_JSON",
        message: "O corpo da requisição contém um JSON inválido.",
      },
    });
  }

  next(error);
});

app.listen(PORT, function () {
  console.log("Servidor iniciado na porta: ", PORT);
});
