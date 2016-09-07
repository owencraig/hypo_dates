var diffs = require('./dateDifferences');
var Date = require('./dateShim');

describe('DateDifferences', function () {
  it('should return 19 when given 02/06/1983 and 22/06/1983', function () {
    var input = {
      fromDate: new Date('02/06/1983'),
      toDate: new Date('22/06/1983')
    };
    expect(diffs.getWholeDayDifferences(input.fromDate, input.toDate)).toEqual(19);
  });

  it('should return 173 when given 04/07/1984 and 25/12/1984', function () {
    var input = {
      fromDate: new Date('04/07/1984'),
      toDate: new Date('25/12/1984')
    };
    expect(diffs.getWholeDayDifferences(input.fromDate, input.toDate)).toEqual(173);
  });

  it('should return 1979 when given 03/01/1989 and 03/08/1983', function () {
    var input = {
      fromDate: new Date('03/08/1983'),
      toDate: new Date('03/01/1989')
    };
    expect(diffs.getWholeDayDifferences(input.fromDate, input.toDate)).toEqual(1979);
  });
});
