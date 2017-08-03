import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import formatDate from '../../helpers/formatDate';
import PropTypes from 'prop-types';

const EventCard = (props) => {
  const { event } = props;

  const DATE = formatDate(event.date)

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
    <Link to={`/event-details/${event.id}`} className="event-card" >
      <div className="card-top">
        <div className="artists">
          <h1 className="primary-artist">{event.performers.primary}</h1>
          {supportingArtistsElement}
        </div>
        <div className="date-time">
          <p className="date">{`${DATE.dayName} ${DATE.monthNum}/${DATE.dayNum}`}</p>
          <p className="time">{`${DATE.time} ${DATE.ampm}`}</p>
        </div>
      </div>
      <div className="card-bottom">
        <div className="venue-name-container">
          <i className="fa fa-at" aria-hidden="true"></i>
          <span className="venue-name">{event.venue.name}</span>
        </div>
        <div className="venue-address-container">
          <i className="fa fa-map-marker" aria-hidden="true"></i>
          <p className="venue-address">{`${event.venue.address1}, ${event.venue.address2}`}</p>
        </div>
      </div>
    </Link>
  )
}

export default EventCard;

EventCard.propTypes = {
  event: PropTypes.object
}
