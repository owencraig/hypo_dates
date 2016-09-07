'use strict';

function isLeapYear(year) {
  let result = false;
  if ((year % 100) === 0) {
    result = (year % 400) === 0;
  } else {
    result = (year % 4) === 0;
  }
  return result;
}
const shortMonth = () => 30;
const longMonth = () => 31;
const monthMapping = {
  2: (year) => (isLeapYear(year) ? 29 : 28),
  4: shortMonth,
  6: shortMonth,
  9: shortMonth,
  11: shortMonth,
};

function numberOfDaysInMonth(month, year) {
  // leaning on function pointers here to make it slightly more elegant
  const resultFunction = monthMapping[month] || longMonth;
  return resultFunction(year);
}

function numberOfDaysToMonthStart(month, year) {
  let result = 0;
  for (let j = 1; j < +month; j++) {
    result += numberOfDaysInMonth(j, year);
  }

  return result;
}

function numberOfDaysToYearStart(year) {
  var result = 0;
  for (let i = 1900; i < +year; i++) {
    if (isLeapYear(i)) {
      result += 366;
    } else {
      result += 365;
    }
  }

  return result;
}

// returns number of milliseconds since 01/01/1901
function getDateValue(day, month, year) {
  return numberOfDaysToYearStart(year) + numberOfDaysToMonthStart(month, year) + +day;
}

function DateShim(stringValue) {
  // parse the date from its parts
  const dateParts = stringValue.split('/');
  const day = dateParts[0];
  const month = dateParts[1];
  const year = dateParts[2];
  const value = getDateValue(day, month, year) * 86400000;
  this.valueOf = () => value;
}

module.exports = DateShim;
