const startQuestionnaireButton = document.getElementById("start-questionnaire");
const introSection = document.getElementById("intro");
const questionnaireSection = document.getElementById("questionnaire");
const currentQuestionInputs = document.querySelectorAll(
  'input[name="current-question"]',
);
const assessmentForm = document.getElementById("assessment-form");
const resultSection = document.getElementById("result");

let currentQuestionIndex = 0;
const answers = [];
let isTransitioning = false;
// let isSubmitting = false;

function getCurrentQuestion() {
  return questions[currentQuestionIndex];
}

function renderCurrentQuestion() {
  assessmentForm.reset();

  const currentQuestion = getCurrentQuestion();
  console.log(currentQuestion);

  for (const option of currentQuestion.options) {
    const optionSpan = assessmentForm.querySelector(
      `span[data-option-id="${option.id}"]`,
    );
    optionSpan.textContent = option.text;
  }
}

function handleSelectedOptionChange() {
  if (isTransitioning) {
    return;
  }

  const selectedOption = assessmentForm.querySelector(
    'input[name="current-question"]:checked',
  );

  const answer = {
    questionId: getCurrentQuestion().id,
    selectedOption: selectedOption.value,
  };
  answers.push(answer);
  isTransitioning = true;

  setTimeout(function () {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      questionnaireSection.hidden = true;
      resultSection.hidden = false;
    } else {
      isTransitioning = false;
      renderCurrentQuestion();
    }
  }, 300);
}

const handleStartQuestionnaireClick = function () {
  introSection.hidden = true;
  questionnaireSection.hidden = false;
};

startQuestionnaireButton.addEventListener(
  "click",
  handleStartQuestionnaireClick,
);

for (const input of currentQuestionInputs) {
  input.addEventListener("change", handleSelectedOptionChange);
}
