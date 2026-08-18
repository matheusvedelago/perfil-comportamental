const { scoringRules } = require("../data/scoringRules");

const createDiscValues = function (answers) {
  const discValue = answers.map(function (answer) {
    return scoringRules[answer.questionId][answer.selectedOption];
  });
  return discValue;
};

const calculateScores = function (discValue) {
  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  for (const profile of discValue) {
    scores[profile]++;
  }
  return scores;
};

const calculatePercentages = function (scores) {
  const percentages = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  let totalScores = 0;
  for (const value in scores) {
    totalScores += scores[value];
  }

  for (const profile in scores) {
    percentages[profile] = Math.round((scores[profile] / totalScores) * 100);
  }
  return percentages;
};

const findHighlightProfiles = function (percentages) {
  const highlightProfiles = [];

  for (const profile in percentages) {
    if (percentages[profile] >= 30) {
      highlightProfiles.push(profile);
    }
  }

  return highlightProfiles;
};

const calculateAssessment = function (answers) {
  const discValue = createDiscValues(answers);
  const scores = calculateScores(discValue);
  const percentages = calculatePercentages(scores);
  const highlightProfiles = findHighlightProfiles(percentages);
  return {
    percentages: percentages,
    highlightProfiles: highlightProfiles,
  };
};

module.exports = { calculateAssessment };
