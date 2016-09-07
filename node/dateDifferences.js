function getDaysInEpoch(val) {
  const millisInADay = 86400000;
  return val.valueOf() / millisInADay;
}

function getWholeDayDifferences(fromDate, toDate) {
  const fromDays = Math.floor(getDaysInEpoch(fromDate) + 1);
  const toDays = Math.floor(getDaysInEpoch(toDate));
  return Math.abs(fromDays - toDays);
}

module.exports = {
  getDaysInEpoch,
  getWholeDayDifferences,
};
