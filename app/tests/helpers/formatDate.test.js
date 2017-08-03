import formatDate from '../../helpers/formatDate';

describe('formatDate function', function () {

  const date = '1988-08-04T08:00:00'

  it('should return an object with the expected keys', function () {
    const DATE = formatDate(date)
    const keys = Object.keys(DATE)
    const expectedKeys = [
      "dayName",
      "dayNum",
      "dayNumPadded",
      "monthName",
      "monthNum",
      "monthNumPadded",
      "year",
      "time",
      "ampm"
    ]
    expect(keys).toEqual(expectedKeys)
  });

  it('should return an abbreviated day name', function () {
    const DATE = formatDate(date)
    expect(DATE.dayName).toEqual('Thu')
  });

  it('should return a day number', function () {
    const DATE = formatDate(date)
    expect(DATE.dayNum).toEqual('4')
  });

  it('should return a day number with a leading zero', function () {
    const DATE = formatDate(date)
    expect(DATE.dayNumPadded).toEqual('04')
  });

  it('should return a month name', function () {
    const DATE = formatDate(date)
    expect(DATE.monthName).toEqual('August')
  });

  it('should return a month number', function () {
    const DATE = formatDate(date)
    expect(DATE.monthNum).toEqual('8')
  });

  it('should return a month number with a leading zero', function () {
    const DATE = formatDate(date)
    expect(DATE.monthNumPadded).toEqual('08')
  });

  it('should return a year', function () {
    const DATE = formatDate(date)
    expect(DATE.year).toEqual('1988')
  });

  it('should return a time', function () {
    const DATE = formatDate(date)
    expect(DATE.time).toEqual('8:00')
  });

  it('should return AM or PM depending on the time', function () {
    const DATE = formatDate(date)
    expect(DATE.ampm).toEqual('am')

    const newDate = '1988-08-04T21:00:00'
    const NEW_DATE = formatDate(newDate)
    expect(NEW_DATE.ampm).toEqual('pm')
  });

});
