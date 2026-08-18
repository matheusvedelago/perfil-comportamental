const { assessmentValidation } = require("../validators/assessmentValidator");
const { calculateAssessment } = require("../calculations/assessmentCalculator");

const handleAssessmentCalculation = function (req, res) {
  const dataValidation = assessmentValidation(req.body);

  if (dataValidation.valid === false) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: dataValidation.error.code,
        message: dataValidation.error.message,
      },
    });
  }

  const assessmentResult = calculateAssessment(req.body.answers);

  return res.status(200).json({
    ok: true,
    data: assessmentResult,
    error: null,
  });
};

module.exports = {
  handleAssessmentCalculation,
};
