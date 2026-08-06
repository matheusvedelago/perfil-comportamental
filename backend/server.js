const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 3000;

const SCORING_RULES = require("./data/scoringRules");

const EXPECTED_ANSWERS_COUNT = 30;
const VALID_QUESTION_IDS = Array.from(
  {
    length: EXPECTED_ANSWERS_COUNT,
  },
  function (_, index) {
    return `Q${index + 1}`;
  },
);
const VALID_OPTIONS = ["A", "B", "C", "D"];

app.use(express.json());

const allowedOrigins = ["http://127.0.0.1:5500", "http://localhost:5500"];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);

app.listen(PORT, function () {
  console.log("Servidor a correr na porta ", PORT);
});

app.get("/health", function (req, res) {
  console.log("Mensagem recebida no health");
  res.json({
    ok: true,
    message: "Servidor ativo",
  });
});

function calculatePercentages(scores) {
  const total = scores.D + scores.I + scores.S + scores.C;

  const calculatedPercentages = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  const profiles = ["D", "I", "S", "C"];

  const remainders = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  for (const profile of profiles) {
    const exactPercentage = (scores[profile] / total) * 100;

    calculatedPercentages[profile] = Math.floor(
      (scores[profile] / total) * 100,
    );

    remainders[profile] = exactPercentage - calculatedPercentages[profile];
  }

  const distributedTotal =
    calculatedPercentages.D +
    calculatedPercentages.I +
    calculatedPercentages.S +
    calculatedPercentages.C;

  let remainingPoints = 100 - distributedTotal;

  while (remainingPoints > 0) {
    let largestRemainder = "D";

    for (const profile of profiles) {
      if (remainders[profile] > remainders[largestRemainder]) {
        largestRemainder = profile;
      }
    }

    calculatedPercentages[largestRemainder] += 1;
    remainders[largestRemainder] = 0;
    remainingPoints -= 1;
  }

  return calculatedPercentages;
}

app.post("/api/assessment/calculate", function (req, res) {
  const answers = req.body.answers;

  if (!answers) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "ANSWERS_REQUIRED",
        message: "O campo answers é obrigatório.",
      },
    });
  }

  if (!Array.isArray(answers)) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "ANSWERS_MUST_BE_ARRAY",
        message: "O campo answers precisa ser do tipo Array.",
      },
    });
  }

  if (answers.length === 0) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "ANSWERS_CANNOT_BE_EMPTY",
        message: "O campo answers não pode estar vazio.",
      },
    });
  }

  if (answers.length !== EXPECTED_ANSWERS_COUNT) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "ANSWERS_COUNT_INVALID",
        message: "O campo answers deve conter 30 registos.",
      },
    });
  }

  const receivedQuestionIds = [];
  for (const receivedAnswer of answers) {
    if (
      typeof receivedAnswer !== "object" ||
      receivedAnswer === null ||
      Array.isArray(receivedAnswer)
    ) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: {
          code: "ANSWER_MUST_BE_OBJECT",
          message:
            "Cada resposta deve ser um objeto válido, e não pode ser null ou array.",
        },
      });
    }

    if (
      typeof receivedAnswer.questionId !== "string" ||
      typeof receivedAnswer.selectedOption !== "string"
    ) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: {
          code: "ANSWER_FIELDS_MUST_BE_STRINGS",
          message: "Os campos questionId e selectedOption devem ser strings.",
        },
      });
    }

    if (!VALID_QUESTION_IDS.includes(receivedAnswer.questionId)) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: {
          code: "QUESTION_ID_INVALID",
          message: "O campo questionId contém um identificador inválido.",
        },
      });
    }

    if (!VALID_OPTIONS.includes(receivedAnswer.selectedOption)) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: {
          code: "OPTION_INVALID",
          message: "O campo selectedOption contém um identificador inválido.",
        },
      });
    }

    if (receivedQuestionIds.includes(receivedAnswer.questionId)) {
      return res.status(400).json({
        ok: false,
        data: null,
        error: {
          code: "QUESTION_ID_DUPLICATED",
          message: "O campo questionId está duplicado.",
        },
      });
    }

    receivedQuestionIds.push(receivedAnswer.questionId);
  }

  const scores = {
    D: 0,
    I: 0,
    S: 0,
    C: 0,
  };

  for (const receivedAnswer of answers) {
    const profile =
      SCORING_RULES[receivedAnswer.questionId][receivedAnswer.selectedOption];
    scores[profile] += 1;
  }

  const percentages = calculatePercentages(scores);

  return res.json({
    ok: true,
    data: {
      percentages: percentages,
    },
    error: null,
  });
});

app.use(function (error, req, res, next) {
  if (error instanceof SyntaxError && error.status === 400 && "body" in error) {
    return res.status(400).json({
      ok: false,
      data: null,
      error: {
        code: "INVALID_JSON",
        message: "O corpo da requisição contém JSON inválido.",
      },
    });
  }

  return res.status(500).json({
    ok: false,
    data: null,
    error: {
      code: "INTERNAL_SERVER_ERROR",
      message: "Ocorreu um erro interno no servidor.",
    },
  });
});
