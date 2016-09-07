var validation = require('./argumentValidation');
describe('Argument Validation', function () {
  it('should return undefined results on too few entries', function () {
    expect(validation.validateArgs(['01/01/2001'])).not.toBeDefined();
  });

  it('should returun undefined on non date type inputs', function () {
    expect(validation.validateArgs(['01/01/2001', '12/12/2003', 'foo'])).not.toBeDefined();
  });

  it('should return the correct dates in the case of two valid inputs', function () {
    expect(validation.validateArgs([new Date(2001, 1, 1), new Date(2003, 11, 12)])).toEqual({
      fromDate: new Date(2001, 1, 1).valueOf(),
      toDate: new Date(2003, 11, 12).valueOf(),
    });
  });

  it('should return the correct from and to dates in the case of more than two valid inputs', function () {
    expect(validation.validateArgs([new Date(2001, 1, 1), new Date(2003, 11, 12), new Date(2003, 11, 11)])).toEqual({
      fromDate: new Date(2001, 1, 1).valueOf(),
      toDate: new Date(2003, 11, 12).valueOf(),
    });
  });

  it('should return on undefined when fed any non valid date', function(){
    expect(validation.validateArgs([new Date(2001, 1, 1), new Date(2003, 11, 12), new Date('hello')])).not.toBeDefined();
  });
});
