exports.success = (message, results) => {
  return {
    message,
    error: false,
    results,
  };
};

exports.error = (message, results) => {
  return {
    message,
    error: true,
    results,
  };
};

exports.validation = (errors) => {
  return {
    message: "Validation errors",
    error: true,
    code: 422,
    errors,
  };
};
