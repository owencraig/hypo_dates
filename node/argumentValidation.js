'use strict';

function getDates(arrayOfDates) {
  return {
    fromDate: Math.min.apply(Math, arrayOfDates),
    toDate: Math.max.apply(Math, arrayOfDates),
  };
}

// verify types and if it's something we are interested in (a valid value from valueOf)
function isValidDate(seed, date, dateType) {
  return seed && date.valueOf && date instanceof (dateType || Date) && !isNaN(date.valueOf());
}

// the dateType here so we can provide a custom type or shim of Date to validate against
function validateInputs(inputs, dateType = Date) {
  return inputs.length >= 2 && inputs.reduce(isValidDate, true, dateType);
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
