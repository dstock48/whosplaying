import filteredEventCards from '../../helpers/filteredEventCards';
import { cleanedTodayMockData } from '../mockData'

describe('filteredEventCards helper function', function () {

  const numOfTodayEvents = 6
  const numOfTomorrowEvents = 3
  const numOfLaterEvents = 2

  const todayEventCards = filteredEventCards(cleanedTodayMockData, 0, 'D')
  const tomorrowEventCards = filteredEventCards(cleanedTodayMockData, 1, 'D')
  const laterEventCards = filteredEventCards(cleanedTodayMockData, 2, 'x')

  it('should return an array of EventCard components for todays events only', function () {
    expect(todayEventCards.length).toEqual(numOfTodayEvents)
  });

  it('should return an array of EventCard components for tomorrow only', function () {
    expect(tomorrowEventCards.length).toEqual(numOfTomorrowEvents)
  });

  it('should return an array of EventCard components for events taking place more than 2 days from today', function () {
    expect(laterEventCards.length).toEqual(numOfLaterEvents)
  });

  it('should render all events into EventCard components', function () {
    expect(todayEventCards.length + tomorrowEventCards.length + laterEventCards.length)
    .toEqual(cleanedTodayMockData.length)
  });

});
