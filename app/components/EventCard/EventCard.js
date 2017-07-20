import React from 'react';
import moment from 'moment'

const EventCard = ({event}) => {
  // console.log(event);

  let day = moment(event.date).format('ddd');
  let monthNum = moment(event.date).format('M');
  let dayNum = moment(event.date).format('D');
  let hour = moment(event.date).format('h');
  let minute = moment(event.date).format('mm');
  let ampm = moment(event.date).format('a');

  if (event.performers.supporting.length === 0) {
    var supportingArtistsElement = <h2 className="supporting-artists"></h2>
  } else {
    var supportingArtists = event.performers.supporting.map((artist, i, arr) => {
      if (i === arr.length - 1) {
        return artist
      }
      return `${artist}, `
    })
    var supportingArtistsElement = <h2 className="supporting-artists">w/ {supportingArtists}</h2>
  }

  const months = [

  ]

  return(
    <a href={event.url} target="_blank" className="event-card">
      <div className="card-top">
        <div className="artists">
          <h1 className="primary-artist">{event.performers.primary}</h1>
          {supportingArtistsElement}
        </div>
        <div className="date-time">
          <p className="date">{day} {monthNum}/{dayNum}</p>
          <p className="time">{hour}:{minute} {ampm}</p>
        </div>
      </div>
      <div className="card-bottom">
        <p className="venue-name"><i className="fa fa-at" aria-hidden="true"></i> {event.venue.name}</p>
        <p className="venue-address"><i className="fa fa-map-marker" aria-hidden="true"></i> {event.venue.address1}, {event.venue.address2}</p>
      </div>
    </a>
  )
}

export default EventCard;
