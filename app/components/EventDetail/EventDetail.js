import React from "react";
import moment from 'moment';

// Component/Container Imports
import GMapContainer from '../../containers/GMapContainer'

const EventDetail = (props) => {

  const thisEvent = props.events.find(event => parseInt(event.id) === parseInt(props.match.params.id))

  let day = moment(thisEvent.date).format('ddd');
  let monthNum = moment(thisEvent.date).format('MMMM');
  let dayNum = moment(thisEvent.date).format('D');
  let time = moment(thisEvent.date).format('h:mm');
  let ampm = moment(thisEvent.date).format('a');

  if (thisEvent.performers.supporting.length === 0) {
    var supportingArtists = <p className="supporting-artist-details"></p>
  } else {
    var supportingArtists = thisEvent.performers.supporting.map((artist, i, arr) => {

      const supportingArtistGenres = thisEvent.performers.genres[artist]
          .map((genre, i) => <li key={'genre' + i}>{genre}</li>)

      return (
        <div key={artist + i} className="supporting-artist-details">
          <h3 className="artist-name">{artist}</h3>
          <div className="genre-info">
            <p className="genre-label">Genres:</p>
            <ul className="genre-list">
              {supportingArtistGenres}
            </ul>
          </div>
        </div>
      )
    })
  }

  const primaryArtistGenres = thisEvent.performers.genres[thisEvent.performers.primary]
      .map((genre, i) => <li key={'genre' + i}>{genre}</li>)

  const marker = {
      position: {
        lat: thisEvent.venue.location.lat,
        lng: thisEvent.venue.location.lon
      },
      key: thisEvent.venue.name
    }

  return (
    <div className="event-detail">
      <div className="primary-artist-details">
        <h2 className="event-heading">ARTISTS</h2>
        <h3 className="artist-name">{thisEvent.performers.primary}</h3>
        <div className="genre-info">
          <p className="genre-label">Genres:</p>
          <ul className="genre-list">
            {primaryArtistGenres}
          </ul>
        </div>
      </div>
      <div className="supporting-details-list">
        <div className="artist-cards">
          {supportingArtists}
        </div>
      </div>
      <div className="venue-info">
        <h2 className="event-heading">VENUE</h2>
        <h3 className="venue-name">{thisEvent.venue.name}</h3>

        <div className="event-start-time">
          <p className="sub-label">Date:</p>
          <p className="event-date">{`${day}, ${monthNum} ${dayNum}`}</p>
          <p className="sub-label">Doors Open:</p>
          <p className="event-time">{`${time}${ampm}`}</p>
        </div>

        <div className="venue-address">
          <p className="sub-label">Address:</p>
          <p>{thisEvent.venue.address1}</p>
          <p>{thisEvent.venue.address2}</p>
        </div>
        <div className="event-action-btns">
          <a className="directions" target="_blank" href={`https://www.google.com/maps/dir/?api=1&destination=${thisEvent.venue.address1} ${thisEvent.venue.address2}`}><i className="fa fa-map" aria-hidden="true"></i>Directions</a>
          <a className="find-tickets" target="_blank" href={thisEvent.url}><i className="fa fa-ticket" aria-hidden="true"></i> Find Tickets</a>
        </div>
      </div>
      <GMapContainer
        containerElement={
          <div className="map-container" />
        }
        mapElement={
          <div className="map-element" />
        }
        markersList={[marker]}
        latLong={props.latLong}
      />
    </div>
  )
}

export default EventDetail;
