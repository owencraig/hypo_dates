function getDates(arrayOfDates) {
  return {
    fromDate: Math.min(...arrayOfDates),
    toDate: Math.max(...arrayOfDates),
  };
}

function isValidDate(alreadyTrue, date) {
  return alreadyTrue && date instanceof Date && date.valueOf && !isNaN(date.valueOf());
}

function validateInputs(inputs) {
  return inputs.length >= 2 && inputs.reduce(isValidDate, true);
}

function validateArgs(args) {
  let result;
  if (validateInputs(args)) {
    result = getDates(args);
  }

  return result;
}

module.exports = {
  validateArgs,
};
