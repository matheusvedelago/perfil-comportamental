const { scoringRules } = require("../data/scoringRules");
const { profileSummaries } = require("../data/profileSummaries");
const { profileContents } = require("../data/profileContents");

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

const createProfileKey = function (highlightProfiles) {
  const discOrder = ["D", "I", "S", "C"];

  const normalizedProfiles = discOrder.filter(function (disc) {
    return highlightProfiles.includes(disc);
  });

  if (normalizedProfiles.length === 0) {
    return null;
  }

  return normalizedProfiles.join("");
};

const createProfileContent = function (highlightProfiles) {
  const profileContent = {};
  for (const profile of highlightProfiles) {
    profileContent[profile] = profileContents[profile];
  }

  return profileContent;
};

const calculateAssessment = function (answers) {
  const discValue = createDiscValues(answers);
  const scores = calculateScores(discValue);
  const percentages = calculatePercentages(scores);
  const highlightProfiles = findHighlightProfiles(percentages);
  const profileKey = createProfileKey(highlightProfiles);
  if (profileKey === null) {
    return {
      percentages: percentages,
      profileSummary: null,
      profileContent: null,
    };
  }

  const profileSummary = profileSummaries[profileKey];
  const profileContent = createProfileContent(highlightProfiles);

  return {
    percentages: percentages,
    profileSummary: profileSummary,
    profileContent: profileContent,
  };
};

module.exports = { calculateAssessment };
