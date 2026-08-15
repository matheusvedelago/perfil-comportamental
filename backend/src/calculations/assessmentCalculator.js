const { scoringRules } = require("../data/scoringRules");

const calculateAssessment = function (answers) {
  const discValue = answers.map(function (answer) {
    const questionId = answer.questionId;
    const selectedOption = answer.selectedOption;

    return scoringRules[questionId][selectedOption];
  });

  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  for (const profile of discValue) {
    scores[profile]++;
  }

  console.log(scores);

  return discValue;
};

module.exports = { calculateAssessment };
