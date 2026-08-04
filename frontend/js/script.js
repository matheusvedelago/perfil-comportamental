const introSection = document.getElementById("intro");
const questionnaireSection = document.getElementById("questionnaire");
const resultSection = document.getElementById("result");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", start);

function start() {
  introSection.hidden = true;
  questionnaireSection.hidden = false;
}

console.log(introSection);
console.log(questionnaireSection);
console.log(resultSection);
console.log(startButton);
