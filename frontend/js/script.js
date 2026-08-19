const startQuestionnaireButton = document.getElementById("start-questionnaire");
const introSection = document.getElementById("intro");
const questionnaireSection = document.getElementById("questionnaire");
const currentQuestionInputs = document.querySelectorAll(
  'input[name="current-question"]',
);
const assessmentForm = document.getElementById("assessment-form");
const resultSection = document.getElementById("result");
const progressText = document.getElementById("progress-text");
const progressBar = document.getElementById("progress-bar");
const profileSummary = document.getElementById("profile-summary");
const profileContent = document.getElementById("profile-content");
const profileName = document.getElementById("profile-name");
const profileOverview = document.getElementById("profile-overview");
const integrationNotes = document.getElementById("integration-notes");
const integrationNotesTitle = document.getElementById(
  "integration-notes-title",
);
const profileStrengths = document.getElementById("profile-strengths");
const profileMotivators = document.getElementById("profile-motivators");
const profileSupportiveThoughts = document.getElementById(
  "profile-supportive-thoughts",
);
const profileLimitingThoughts = document.getElementById(
  "profile-limiting-thoughts",
);
const profileDevelopmentPoints = document.getElementById(
  "profile-development-points",
);
const profileResultError = document.getElementById("profile-result-error");
const resultMessage = document.getElementById("result-message");
const loadingMessage = document.getElementById("loading-message");

const apiBaseUrl = "http://localhost:3000";

let currentQuestionIndex = 0;
const answers = [];
let isTransitioning = false;
let isSubmitting = false;

function resetResultContent() {
  integrationNotes.innerHTML = "";
  profileStrengths.innerHTML = "";
  profileMotivators.innerHTML = "";
  profileSupportiveThoughts.innerHTML = "";
  profileLimitingThoughts.innerHTML = "";
  profileDevelopmentPoints.innerHTML = "";
  profileName.textContent = "";
  profileOverview.textContent = "";

  profileResultError.hidden = true;
  profileSummary.hidden = false;
  profileContent.hidden = false;

  integrationNotesTitle.hidden = false;
  integrationNotes.hidden = false;
}

function getCurrentQuestion() {
  return questions[currentQuestionIndex];
}

function renderCurrentQuestion() {
  assessmentForm.reset();
  progressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
  progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;

  const currentQuestion = getCurrentQuestion();

  for (const option of currentQuestion.options) {
    const optionSpan = assessmentForm.querySelector(
      `span[data-option-id="${option.id}"]`,
    );
    optionSpan.textContent = option.text;
  }
}

function handleSelectedOptionChange() {
  if (isSubmitting || isTransitioning) {
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

  if (currentQuestionIndex >= questions.length - 1) {
    isSubmitting = true;
  } else {
    isTransitioning = true;
  }

  setTimeout(function () {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      questionnaireSection.hidden = true;
      resultSection.hidden = false;
      submitAssessment();
    } else {
      isTransitioning = false;
      renderCurrentQuestion();
    }
  }, 300);
}

const handleStartQuestionnaireClick = function () {
  introSection.hidden = true;
  questionnaireSection.hidden = false;

  renderCurrentQuestion();
};

startQuestionnaireButton.addEventListener(
  "click",
  handleStartQuestionnaireClick,
);

for (const input of currentQuestionInputs) {
  input.addEventListener("change", handleSelectedOptionChange);
}

async function submitAssessment() {
  resultMessage.textContent = "";
  loadingMessage.hidden = false;

  const apiUrl = `${apiBaseUrl}/api/assessment/calculate`;

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      answers: answers,
    }),
  };

  try {
    const response = await fetch(apiUrl, requestOptions);

    const responseData = await response.json();

    if (!response.ok) {
      resultMessage.textContent = responseData.error.message;
      return;
    }

    renderResult(responseData);
  } catch {
    resultMessage.textContent =
      "Não foi possível obter o resultado. Tente novamente em instantes.";
  } finally {
    loadingMessage.hidden = true;
    isSubmitting = false;
  }
}

function renderProfileContentGroup(
  profileContent,
  titleText,
  targetContainer,
  contentKey,
) {
  for (const profile in profileContent) {
    const profileDiv = document.createElement("div");
    const profileTitle = document.createElement("h4");
    profileTitle.textContent = `${titleText} ${profile}`;
    const profileUl = document.createElement("ul");

    profileDiv.classList.add("profile-div");

    targetContainer.appendChild(profileDiv);
    profileDiv.appendChild(profileTitle);
    profileDiv.appendChild(profileUl);

    for (const content of profileContent[profile][contentKey]) {
      const listItem = document.createElement("li");
      listItem.textContent = content;
      profileUl.appendChild(listItem);
    }
  }
}

function renderResult(responseData) {
  resetResultContent();

  const responsePercentages = responseData.data.percentages;
  const responseProfileContent = responseData.data.profileContent;
  const responseProfileSummary = responseData.data.profileSummary;

  const profiles = ["D", "I", "S", "C"];

  for (const profile of profiles) {
    const profileChart = document.getElementById(
      `profile-chart-${profile.toLowerCase()}`,
    );

    const percentageText = profileChart.querySelector(".chart-bar-percentage");
    const chartBar = profileChart.querySelector(".chart-bar");
    const percentage = responsePercentages[profile];
    const isHighlighted = percentage >= 30;

    percentageText.textContent = `${percentage}%`;
    chartBar.style.height = `${percentage}%`;

    profileChart.style.setProperty("--bar-height", `${percentage}%`);
    profileChart.classList.toggle("is-highlighted", percentage >= 30);
  }

  if (responseProfileSummary !== null && responseProfileContent !== null) {
    profileName.textContent = responseProfileSummary.profileName;
    profileOverview.textContent = responseProfileSummary.overview;

    if (responseProfileSummary.integrationNotes !== null) {
      for (const integrationNote of responseProfileSummary.integrationNotes) {
        const listItem = document.createElement("li");

        listItem.textContent = integrationNote;

        integrationNotes.appendChild(listItem);
      }
    } else {
      integrationNotesTitle.hidden = true;
      integrationNotes.hidden = true;
    }

    renderProfileContentGroup(
      responseProfileContent,
      "Forças",
      profileStrengths,
      "strengths",
    );

    renderProfileContentGroup(
      responseProfileContent,
      "Motivadores",
      profileMotivators,
      "motivators",
    );

    renderProfileContentGroup(
      responseProfileContent,
      "Pensamentos Propulsores",
      profileSupportiveThoughts,
      "supportiveThoughts",
    );

    renderProfileContentGroup(
      responseProfileContent,
      "Pensamentos Limitantes",
      profileLimitingThoughts,
      "limitingThoughts",
    );

    for (const profile in responseProfileContent) {
      const profileDiv = document.createElement("div");
      const profileTitle = document.createElement("h4");
      profileTitle.textContent = `${"Pontos"} ${profile}`;
      const profileUl = document.createElement("ul");

      profileDiv.classList.add("profile-div");

      profileDevelopmentPoints.appendChild(profileDiv);
      profileDiv.appendChild(profileTitle);
      profileDiv.appendChild(profileUl);

      for (const content of responseProfileContent[profile].developmentPoints) {
        const listItem = document.createElement("li");

        const limitingBehaviorText = document.createElement("span");
        limitingBehaviorText.classList.add("limiting-behavior");
        limitingBehaviorText.textContent = `${content.limitingBehavior} `;

        const developmentArrow = document.createElement("span");
        developmentArrow.classList.add("development-arrow");
        developmentArrow.textContent = "→";

        const developmentGoalText = document.createElement("span");
        developmentGoalText.classList.add("development-goal");
        developmentGoalText.textContent = ` ${content.developmentGoal}`;

        listItem.appendChild(limitingBehaviorText);
        listItem.appendChild(developmentArrow);
        listItem.appendChild(developmentGoalText);

        profileUl.appendChild(listItem);
      }
    }
  } else {
    profileSummary.hidden = true;
    profileContent.hidden = true;
    profileResultError.hidden = false;
  }
}
