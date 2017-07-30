import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const EventCard = (props) => {
  const { event } = props

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

  return(
    <Link to={`/event-details/${event.id}`}  className="event-card" >
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
        <div className="venue-name-container">
          <i className="fa fa-at" aria-hidden="true"></i>
          <span className="venue-name">{event.venue.name}</span>
        </div>
        <div className="venue-address-container">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p className="venue-address">{event.venue.address1}, {event.venue.address2}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard;
