import React, {Component} from 'react';
import moment from 'moment'
import apiKey from '../../apiKey'

// Component/Container Imports
import EventCard from '../EventCard/EventCard'
import GMapContainer from '../../containers/GMapContainer'

class Main extends Component {
  constructor() {
    super()
    this.state = {
      latLong: { lat: 39.7392358, lng: -104.990251 },
      dayView: '',
      dateLimit: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.latLong.lat !== nextProps.latLong.lat) {
      this.setState({latLong: nextProps.latLong})
    }
  }

  componentWillUnmount() {
    window.scrollTo(0,0)
  }

  componentDidMount() {
    this.fetchEvents(this.props.dayView)
  }

  fetchEvents(timeRange) {

    const date = new Date();
    const today = moment(date);
    const dateLimit = moment(date).add(timeRange, 'day');

    const todayDate = dateLimit.format("DD");
    const todayMonth = dateLimit.format("MM");
    const todayYear = dateLimit.format("YYYY");

    if (this.props.events.length === 0) {
      this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&geoip=true&range=10mi&type=concert&per_page=1000&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate}`);
    }

    this.setState({
      dayView: timeRange,
      dateLimit: dateLimit.subtract(1, 'day').format('ddd MMM D'),
      currentDate: today.format('ddd MMM D')
    })

    this.props.setDayView(timeRange)
  }

  fetchNewEvents(timeRange) {

    const date = new Date();
    const today = moment(date);
    const dateLimit = moment(date).add(timeRange, 'day');

    const todayDate = dateLimit.format("DD");
    const todayMonth = dateLimit.format("MM");
    const todayYear = dateLimit.format("YYYY");

    this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&lat=${this.props.latLong.lat}&lon=${this.props.latLong.lng}&range=10mi&type=concert&per_page=1000&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate}`);

    this.setState({
      dayView: timeRange,
      dateLimit: dateLimit.subtract(1, 'day').format('ddd MMM D'),
      currentDate: today.format('ddd MMM D')
    })

    this.props.setDayView(timeRange)
  }


  render() {
    if (this.props.events.length === 0) {
      return <div className="main">
        <h1 className="location">{this.props.location}</h1>
        <p className="no-events-msg">* No Events Found *</p>
      </div>
    }

    // TODO: COMBINE THESE 3 INTO 1 FN
    ///////////////////
    const todayEvents = this.props.events.filter(event => {
      const date = new Date()
      return parseInt(moment(event.date).format('D')) === date.getDate();
    }).map((event, i) => {
      const key = event.id
      return <EventCard key={key} event={event} />
    })

    const tomorrowEvents = this.props.events.filter(event => {
      const date = new Date()
      return parseInt(moment(event.date).format('D')) === parseInt(moment(date).add(1, 'day').format('D'));
    }).map((event, i) => {
      const key = event.id
      return <EventCard key={key + i} event={event} />
    })

    const allOtherEvents = this.props.events.filter(event => {

      const date = new Date()

      let eventDay = parseInt(moment(event.date).format('x'))
      let limit = parseInt(moment(date).add(2, 'day').format('x'))

      return eventDay > limit;
    }).map((event, i) => {
      const key = event.id
      return <EventCard key={key + i} event={event} />
    })
////////////////////////////

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
        <div className="time-range-btns">
          <button onClick={() => this.fetchNewEvents(2)}>2 Day</button>
          <button onClick={() => this.fetchNewEvents(7)}>7 Day</button>
        </div>

        <h1 className="location"><i className="fa fa-location-arrow" aria-hidden="true"></i> <span className="location-name">{this.props.location}</span></h1>

        <GMapContainer
          containerElement={
            <div className="map-container" style={{ height: `300px` }} />
          }
          mapElement={
            <div className="map-element" style={{ height: `300px` }} />
          }
          markersList={markerList}
          latLong={this.state.latLong}
        />

        <h2 className="event-count">{this.props.events.length} Events</h2>
        <h3 className="date-range">{this.state.currentDate} - {this.state.dateLimit}</h3>

        {todayEvents.length ?
          <h3 className="today-heading"><i className="fa fa-calendar" aria-hidden="true"></i>TODAY</h3>
        : null}
        {todayEvents.length ? todayEvents : null}

        {tomorrowEvents.length ?
          <h3 className="tomorrow-heading"><i className="fa fa-calendar" aria-hidden="true"></i>TOMORROW</h3>
        : null}
        {tomorrowEvents.length ? tomorrowEvents : null}

        {allOtherEvents.length ?
          <h3 className="tomorrow-heading"><i className="fa fa-calendar" aria-hidden="true"></i>Next 5 Days</h3>
        : null}
        {allOtherEvents.length ? allOtherEvents : null}

      </div>
    )
  }
}

export default Main;
