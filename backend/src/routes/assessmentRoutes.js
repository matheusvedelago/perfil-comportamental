const express = require("express");
const {
  handleAssessmentCalculation,
} = require("../controllers/assessmentController");

const route = express.Router();

route.post("/calculate", handleAssessmentCalculation);

module.exports = route;
