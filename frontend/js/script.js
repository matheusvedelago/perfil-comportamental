const introSection = document.getElementById("intro");
const questionnaireSection = document.getElementById("questionnaire");
const resultSection = document.getElementById("result");
const startButton = document.getElementById("start-button");
const assessmentForm = document.getElementById("assessment-form");
const resultMessage = document.getElementById("result-message");
const progressText = document.getElementById("progress-text");
const resultChart = document.getElementById("result-chart");

const questions = [
  {
    id: "Q1",
    options: [
      { id: "A", text: "Respeitador" },
      { id: "B", text: "Competitivo" },
      { id: "C", text: "Racional" },
      { id: "D", text: "Motivador" },
    ],
  },
  {
    id: "Q2",
    options: [
      { id: "A", text: "Analítico" },
      { id: "B", text: "Compreensivo" },
      { id: "C", text: "Decisivo" },
      { id: "D", text: "Inspirador" },
    ],
  },
  {
    id: "Q3",
    options: [
      { id: "A", text: "Fiável" },
      { id: "B", text: "Detalhista" },
      { id: "C", text: "Comunicativo" },
      { id: "D", text: "Determinado" },
    ],
  },
  {
    id: "Q4",
    options: [
      { id: "A", text: "Objetivo" },
      { id: "B", text: "Arrojado" },
      { id: "C", text: "Extrovertido" },
      { id: "D", text: "Pacífico" },
    ],
  },
  {
    id: "Q5",
    options: [
      { id: "A", text: "Proativo" },
      { id: "B", text: "Visionário" },
      { id: "C", text: "Generoso" },
      { id: "D", text: "Planeador" },
    ],
  },
  {
    id: "Q6",
    options: [
      { id: "A", text: "Desbloqueador" },
      { id: "B", text: "Sistemático" },
      { id: "C", text: "Dedicado" },
      { id: "D", text: "Vibrante" },
    ],
  },
  {
    id: "Q7",
    options: [
      { id: "A", text: "Conciliador" },
      { id: "B", text: "Alegre" },
      { id: "C", text: "Transformador" },
      { id: "D", text: "Organizado" },
    ],
  },
  {
    id: "Q8",
    options: [
      { id: "A", text: "Meticuloso" },
      { id: "B", text: "Colaborativo" },
      { id: "C", text: "Persuasivo" },
      { id: "D", text: "Pragmático" },
    ],
  },
  {
    id: "Q9",
    options: [
      { id: "A", text: "Preciso" },
      { id: "B", text: "Sociável" },
      { id: "C", text: "Paciente" },
      { id: "D", text: "Persistente" },
    ],
  },
  {
    id: "Q10",
    options: [
      { id: "A", text: "Criterioso" },
      { id: "B", text: "Eficaz" },
      { id: "C", text: "Moderado" },
      { id: "D", text: "Empático" },
    ],
  },
  {
    id: "Q11",
    options: [
      { id: "A", text: "Lógico" },
      { id: "B", text: "Facilitador" },
      { id: "C", text: "Constante" },
      { id: "D", text: "Líder" },
    ],
  },
  {
    id: "Q12",
    options: [
      { id: "A", text: "Corajoso" },
      { id: "B", text: "Estratégico" },
      { id: "C", text: "Carismático" },
      { id: "D", text: "Equilibrado" },
    ],
  },
  {
    id: "Q13",
    options: [
      { id: "A", text: "Técnico" },
      { id: "B", text: "Sereno" },
      { id: "C", text: "Ambicioso" },
      { id: "D", text: "Contagiante" },
    ],
  },
  {
    id: "Q14",
    options: [
      { id: "A", text: "Inovador" },
      { id: "B", text: "Exato" },
      { id: "C", text: "Adaptável" },
      { id: "D", text: "Tranquilo" },
    ],
  },
  {
    id: "Q15",
    options: [
      { id: "A", text: "Calculista" },
      { id: "B", text: "Compassivo" },
      { id: "C", text: "Espontâneo" },
      { id: "D", text: "Assertivo" },
    ],
  },
  {
    id: "Q16",
    options: [
      { id: "A", text: "Metódico" },
      { id: "B", text: "Articulado" },
      { id: "C", text: "Ousado" },
      { id: "D", text: "Apaziguador" },
    ],
  },
  {
    id: "Q17",
    options: [
      { id: "A", text: "Humano" },
      { id: "B", text: "Resolutivo" },
      { id: "C", text: "Incentivador" },
      { id: "D", text: "Cuidadoso" },
    ],
  },
  {
    id: "Q18",
    options: [
      { id: "A", text: "Autossuficiente" },
      { id: "B", text: "Otimista" },
      { id: "C", text: "Afetivo" },
      { id: "D", text: "Realista" },
    ],
  },
  {
    id: "Q19",
    options: [
      { id: "A", text: "Criativo" },
      { id: "B", text: "Solidário" },
      { id: "C", text: "Marcante" },
      { id: "D", text: "Minucioso" },
    ],
  },
  {
    id: "Q20",
    options: [
      { id: "A", text: "Amável" },
      { id: "B", text: "Engajado" },
      { id: "C", text: "Diretivo" },
      { id: "D", text: "Precavido" },
    ],
  },
  {
    id: "Q21",
    options: [
      { id: "A", text: "Manipulador" },
      { id: "B", text: "Inflexível" },
      { id: "C", text: "Arrogante" },
      { id: "D", text: "Dependente" },
    ],
  },
  {
    id: "Q22",
    options: [
      { id: "A", text: "Impaciente" },
      { id: "B", text: "Indeciso" },
      { id: "C", text: "Exigente" },
      { id: "D", text: "Falador" },
    ],
  },
  {
    id: "Q23",
    options: [
      { id: "A", text: "Passivo" },
      { id: "B", text: "Exagerado" },
      { id: "C", text: "Fiscalizador" },
      { id: "D", text: "Autoritário" },
    ],
  },
  {
    id: "Q24",
    options: [
      { id: "A", text: "Acomodado" },
      { id: "B", text: "Impulsivo" },
      { id: "C", text: "Superficial" },
      { id: "D", text: "Rígido" },
    ],
  },
  {
    id: "Q25",
    options: [
      { id: "A", text: "Insensível" },
      { id: "B", text: "Distraído" },
      { id: "C", text: "Submisso" },
      { id: "D", text: "Reservado" },
    ],
  },
  {
    id: "Q26",
    options: [
      { id: "A", text: "Hiperanalítico" },
      { id: "B", text: "Apático" },
      { id: "C", text: "Desorganizado" },
      { id: "D", text: "Intimidador" },
    ],
  },
  {
    id: "Q27",
    options: [
      { id: "A", text: "Egocêntrico" },
      { id: "B", text: "Receoso" },
      { id: "C", text: "Inconstante" },
      { id: "D", text: "Crítico" },
    ],
  },
  {
    id: "Q28",
    options: [
      { id: "A", text: "Perfeccionista" },
      { id: "B", text: "Ingénuo" },
      { id: "C", text: "Controlador" },
      { id: "D", text: "Evitante" },
    ],
  },
  {
    id: "Q29",
    options: [
      { id: "A", text: "Desconfiado" },
      { id: "B", text: "Exaltado" },
      { id: "C", text: "Prepotente" },
      { id: "D", text: "Lento" },
    ],
  },
  {
    id: "Q30",
    options: [
      { id: "A", text: "Demorado" },
      { id: "B", text: "Preciosista" },
      { id: "C", text: "Dispersivo" },
      { id: "D", text: "Agressivo" },
    ],
  },
];

let currentQuestionIndex = 0;
const answers = [];

function getCurrentQuestion() {
  return questions[currentQuestionIndex];
}

function renderCurrentQuestion() {
  assessmentForm.reset();

  const currentQuestion = getCurrentQuestion();

  for (const option of currentQuestion.options) {
    const optionInput = assessmentForm.querySelector(
      `input[value="${option.id}"]`,
    );
    const optionText = optionInput.parentElement.querySelector("span");
    optionText.textContent = option.text;
  }
}

startButton.addEventListener("click", startQuestionnaire);
assessmentForm.addEventListener("change", handleAnswerChange);

function startQuestionnaire() {
  introSection.hidden = true;
  questionnaireSection.hidden = false;
  renderCurrentQuestion();
}

function handleAnswerChange() {
  const selectedOption = assessmentForm.querySelector(
    'input[name="current-question"]:checked',
  );

  const answer = {
    questionId: getCurrentQuestion().id,
    selectedOption: selectedOption.value,
  };

  let answerWasUpdated = false;
  for (const savedAnswer of answers) {
    if (savedAnswer.questionId === answer.questionId) {
      savedAnswer.selectedOption = answer.selectedOption;

      answerWasUpdated = true;
      break;
    }
  }
  if (answerWasUpdated === false) {
    answers.push(answer);
  }
  setTimeout(function () {
    currentQuestionIndex++;
    if (currentQuestionIndex >= questions.length) {
      questionnaireSection.hidden = true;
      resultSection.hidden = false;
      submitAssessment();
    } else {
      progressText.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
      renderCurrentQuestion();
    }
  }, 300);
}

async function submitAssessment() {
  const apiUrl = "http://localhost:3000/api/assessment/calculate";

  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      answers: answers,
    }),
  };

  const response = await fetch(apiUrl, requestOptions);
  const responseData = await response.json();

  if (!response.ok) {
    resultMessage.textContent = responseData.error.message;
    return;
  }

  const responsePercentages = responseData.data.percentages;
  console.log(responsePercentages);

  renderChart(responsePercentages);
}

function renderChart(percentages) {
  resultChart.innerHTML = "";

  const profiles = ["D", "I", "S", "C"];

  const profileNames = {
    D: "Dominância",
    I: "Influência",
    S: "Estabilidade",
    C: "Conformidade",
  };

  const chartBars = document.createElement("div");
  chartBars.classList.add("chart-bars");

  const chartLabels = document.createElement("div");
  chartLabels.classList.add("chart-labels");

  const thresholdLine = document.createElement("div");
  thresholdLine.classList.add("threshold-line");

  chartBars.appendChild(thresholdLine);

  for (const profile of profiles) {
    const percentageProfile = percentages[profile];

    const barArea = document.createElement("div");
    barArea.classList.add("bar-area");

    const barGroup = document.createElement("div");
    barGroup.classList.add("bar-group");
    barGroup.style.height = `${percentageProfile}%`;

    const percentageLabel = document.createElement("span");
    percentageLabel.classList.add("percentage-label");
    percentageLabel.textContent = `${percentageProfile}%`;

    const profileBar = document.createElement("div");
    profileBar.classList.add("profile-bar", profile);

    const profileName = document.createElement("span");
    profileName.classList.add("profile-name");
    profileName.textContent = profileNames[profile];

    if (percentageProfile >= 30) {
      barGroup.classList.add("highlighted");
      profileName.classList.add("highlighted");
    }

    barGroup.appendChild(percentageLabel);
    barGroup.appendChild(profileBar);

    barArea.appendChild(barGroup);

    chartBars.appendChild(barArea);
    chartLabels.appendChild(profileName);
  }

  resultChart.appendChild(chartBars);
  resultChart.appendChild(chartLabels);
}
