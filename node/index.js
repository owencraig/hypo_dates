const dateDifferences = require('./dateDifferences');
const Date = require('./dateShim');
const commandLineArgs = require('command-line-args');
const validation = require('./argumentValidation');

const optionDefinitions = [
  {
    name: 'testDate',
    alias: 't',
    type: (s) => new Date(s),
    multiple: true,
    defaultOption: true,
  },
];

const options = commandLineArgs(optionDefinitions);

const args = validation.validateArgs(options.testDate, Date);

var result;

if (args) {
  // if it's valid, let's do it
  result = dateDifferences.getWholeDayDifferences(args.fromDate, args.toDate);
} else {
  // show an error
  result = 'Error processing parameters, please call with a list of valid date strings';
}

console.log(result);

