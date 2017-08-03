import moment from 'moment';

const formatDate = (date) => {
  return {
    dayName: moment(date).format('ddd'),
    dayNum: moment(date).format('D'),
    dayNumPadded: moment(date).format('DD'),
    monthName: moment(date).format('MMMM'),
    monthNum: moment(date).format('M'),
    monthNumPadded: moment(date).format('MM'),
    year: moment(date).format('YYYY'),
    time: moment(date).format('h:mm'),
    ampm: moment(date).format('a')
  }
}

export default formatDate;
