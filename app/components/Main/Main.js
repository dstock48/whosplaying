import React, {Component} from 'react';
import apiKey from '../../apiKey'
import EventCard from '../EventCard/EventCard'

class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    const today = new Date();
    const todayDate = today.getDate();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();

    this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&geoip=true&range=12mi&type=concert&per_page=25&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate + 2}`);
  }


  render() {
    if (this.props.events.length === 0) {
      return <div></div>
    }
    const eventCards = this.props.events.map(event => {
      const key = event.performers.primary
      return <EventCard key={key} event={event} />
    })
    return(
      <div className="main">
        <h1 className="location">{this.props.location}</h1>
        {eventCards}
      </div>
    )
  }

}

export default Main;
