const { totalQuestionCount } = require("../config/assessmentConfig");
const { validQuestionIds } = require("../config/assessmentConfig");
const { validSelectedOptions } = require("../config/assessmentConfig");

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

  function hasExactProperties(data) {
    const hasQuestionId = Object.hasOwn(data, "questionId");
    const hasSelectedOption = Object.hasOwn(data, "selectedOption");
    const hasExactlyTwoProperties = Object.keys(data).length === 2;

    return hasQuestionId && hasSelectedOption && hasExactlyTwoProperties;
  }
  const everyItemHasExactProperties = body.answers.every(hasExactProperties);
  if (!everyItemHasExactProperties) {
    return {
      valid: false,
      error: {
        code: "INVALID_ANSWER_PROPERTIES",
        message:
          "Cada item de answers deve conter apenas questionId e selectedOption",
      },
    };
  }

  function hasStringProperties(data) {
    return (
      typeof data.questionId === "string" &&
      typeof data.selectedOption === "string"
    );
  }

  const everyItemHasStringProperties = body.answers.every(hasStringProperties);
  if (!everyItemHasStringProperties) {
    return {
      valid: false,
      error: {
        code: "INVALID_ANSWER_PROPERTY_TYPE",
        message: "questionId e selectedOption devem ser string",
      },
    };
  }

  function hasValidQuestionId(data) {
    return validQuestionIds.includes(data.questionId);
  }

  const everyQuestionIdIsValid = body.answers.every(hasValidQuestionId);

  if (!everyQuestionIdIsValid) {
    return {
      valid: false,
      error: {
        code: "INVALID_QUESTION_ID",
        message: "questionId contém um identificador inválido",
      },
    };
  }

  function hasValidSelectedOption(data) {
    return validSelectedOptions.includes(data.selectedOption);
  }

  const everySelectedOptionIsValid = body.answers.every(hasValidSelectedOption);

  if (!everySelectedOptionIsValid) {
    return {
      valid: false,
      error: {
        code: "INVALID_SELECTED_OPTION",
        message: "selectedOption contém uma opção inválida",
      },
    };
  }

  function verifyDuplicateQuestionId(answers) {
    const foundQuestionIds = [];

    for (let index = 0; index < answers.length; index++) {
      const questionId = answers[index].questionId;

      if (foundQuestionIds.includes(questionId)) {
        return false;
      }
      foundQuestionIds.push(questionId);
    }
    return true;
  }

  const questionIdIsNotDuplicate = verifyDuplicateQuestionId(body.answers);

  if (!questionIdIsNotDuplicate) {
    return {
      valid: false,
      error: {
        code: "QUESTION_ID_DUPLICATED",
        message: "questionId não pode ser duplicado",
      },
    };
  }

  return {
    valid: true,
    error: null,
  };
};

module.exports = { assessmentValidation };
