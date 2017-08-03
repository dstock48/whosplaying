import formatDate from '../../helpers/formatDate';

describe('formatDate function', function () {

  it('should return an object', function () {
    const newDate = new Date()
    const DATE = formatDate(newDate)
    console.log(DATE);
  });

});
