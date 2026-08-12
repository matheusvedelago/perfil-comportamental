const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = ["http://localhost:5500", "http://127.0.0.1:5500"];
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

app.listen(PORT, function () {
  console.log("Servidor iniciado na porta: ", PORT);
});
