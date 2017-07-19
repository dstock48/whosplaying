import React, {Component} from 'react';
import apiKey from '../../apiKey'

class Main extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  componentDidMount() {
    console.log(this.props);
    const today = new Date();
    const todayDate = today.getDate();

    this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&geoip=true&range=12mi&type=concert&per_page=25&datetime_local.lte=2017-07-${todayDate + 2}`)
  }

  render() {
    return(
      <main className="main-component">MAIN COMPONENT</main>
    )
  }

}

export default Main;
