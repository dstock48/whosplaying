import React, {Component} from 'react';
import apiKey from '../../apiKey'
import EventCard from '../EventCard/EventCard'
import GMapContainer from '../../containers/GMapContainer'
import moment from 'moment'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      latLong: { lat: 39.7392358, lng: -104.990251 }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.latLong.lat !== nextProps.latLong.lat) {
      this.setState({latLong: nextProps.latLong})
    }
  }

  componentDidMount() {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();

    this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&geoip=true&range=12mi&type=concert&per_page=25&listing_count.gt=0&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate + 2}`);
  }


  render() {
    // console.log(this.props);

    if (this.props.events.length === 0) {
      return <div className="main">
        <h1 className="location">{this.props.location}</h1>
        <p className="no-events-msg">* No Events Found *</p>
        {/* <p className="spinner-container"><i id="spinner" className="fa fa-spinner" aria-hidden="true"></i></p> */}
      </div>
    }

    const todayEvents = this.props.events.filter(event => {
      const date = new Date()
      return parseInt(moment(event.date).format('D')) === date.getDate();
    }).map((event, i) => {
      const key = event.performers.primary
      return <EventCard key={key + i} event={event} />
    })

    const tomorrowEvents = this.props.events.filter(event => {
      const date = new Date()
      return parseInt(moment(event.date).format('D')) === date.getDate() + 1;
    }).map((event, i) => {
      const key = event.performers.primary
      return <EventCard key={key + i} event={event} />
    })

    const eventCards = this.props.events.map((event, i) => {
      const key = event.performers.primary
      return <EventCard key={key + i} event={event} />
    })

    const markerList = this.props.events.map(event => {
      return {
        position: {
          lat: event.venue.location.lat,
          lng: event.venue.location.lon
        },
        key: event.venue.name
      }
    })

    return(
      <div className="main">
        <h1 className="location"><i className="fa fa-location-arrow" aria-hidden="true"></i> {this.props.location}</h1>
        <GMapContainer
          containerElement={
            <div className="map-container" style={{ height: `400px` }} />
          }
          mapElement={
            <div className="map-element" style={{ height: `400px` }} />
          }
          markersList={markerList}
          latLong={this.state.latLong}
        />
        {todayEvents.length ?
          <h3 className="today-heading"><i className="fa fa-calendar" aria-hidden="true"></i>TODAY</h3>
        : null}
        {todayEvents.length ? todayEvents : null}
        {tomorrowEvents.length ?
          <h3 className="tomorrow-heading"><i className="fa fa-calendar" aria-hidden="true"></i>TOMORROW</h3>
        : null}
        {tomorrowEvents.length ? tomorrowEvents : null}
      </div>
    )
  }

}

export default Main;
