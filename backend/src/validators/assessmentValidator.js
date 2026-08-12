const { totalQuestionCount } = require("../config/assessmentConfig");

const assessmentValidation = function (body) {
  if (!body) {
    return {
      valid: false,
      error: {
        code: "BODY_REQUIRED",
        message: "Corpo da requisição é obrigatório.",
      },
    };
  }

  const answersExists = Object.hasOwn(body, "answers");
  if (!answersExists) {
    return {
      valid: false,
      error: {
        code: "ANSWERS_REQUIRED",
        message: "Campo answers é obrigatório.",
      },
    };
  }

  if (!Array.isArray(body.answers)) {
    return {
      valid: false,
      error: {
        code: "NOT_ARRAY",
        message: "Answers deve ser do tipo array.",
      },
    };
  }

  if (body.answers.length === 0) {
    return {
      valid: false,
      error: {
        code: "ANSWERS_EMPTY",
        message: "Answers não pode estar vazio.",
      },
    };
  }

  if (body.answers.length !== totalQuestionCount) {
    return {
      valid: false,
      error: {
        code: "INVALID_ANSWERS_COUNT",
        message: `O número de questões precisa ser ${totalQuestionCount}`,
      },
    };
  }

  function checkObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
  }
  const everyItemIsObject = body.answers.every(checkObject);

  if (!everyItemIsObject) {
    return {
      valid: false,
      error: {
        code: "ITEM_ANSWERS_NOT_OBJECT",
        message: "Os itens de answers devem ser do tipo objeto",
      },
    };
  }

  return {
    valid: true,
    error: null,
  };
};

module.exports = { assessmentValidation };
