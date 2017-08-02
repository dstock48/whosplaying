import React from 'react';
import moment from 'moment';
import EventCard from '../components/EventCard/EventCard'

const filteredEventCards = (eventsArr, dayLimit, dateFormat) => {
  return eventsArr.filter(event => {
    const date = new Date()

    let eventDay = parseInt(moment(event.date).format(dateFormat))
    let limit = parseInt(moment(date).add(dayLimit, 'day').format(dateFormat))

    return dayLimit < 2 ? eventDay === limit : eventDay > limit;
  }).map((event, i) => {
    const key = event.id
    return <EventCard key={key + i} event={event} />
  })
}

export default filteredEventCards;
