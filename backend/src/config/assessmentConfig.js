const totalQuestionCount = 30;

function createValidQuestionIds() {
  const questionIds = [];

  for (
    let questionIndex = 0;
    questionIndex < totalQuestionCount;
    questionIndex++
  ) {
    questionIds.push("Q" + (questionIndex + 1));
  }
  return questionIds;
}
const validQuestionIds = createValidQuestionIds();

const validSelectedOptions = ["A", "B", "C", "D"];

module.exports = {
  totalQuestionCount,
  validQuestionIds,
  validSelectedOptions,
};
