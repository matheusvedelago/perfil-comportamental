const introSection = document.getElementById("intro");
const questionnaireSection = document.getElementById("questionnaire");
const resultSection = document.getElementById("result");
const startButton = document.getElementById("start-button");
const assessmentForm = document.getElementById("assessment-form");

startButton.addEventListener("click", startQuestionnaire);
assessmentForm.addEventListener("change", handleAnswerChange);

function startQuestionnaire() {
  introSection.hidden = true;
  questionnaireSection.hidden = false;
}

console.log(introSection);
console.log(questionnaireSection);
console.log(resultSection);
console.log(startButton);

function handleAnswerChange() {
  const selectedOption = assessmentForm.querySelector(
    'input[name="question-1"]:checked',
  );

  console.log(selectedOption.value);
}
