import React, { Component } from "react";
import Search from 'react-search';
import cityList from '../../helpers/cityList';
import moment from 'moment';

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }
  }

  handleChange(e) {
    this.setState({location: e})
  }

  handleSubmit() {

    if (this.state.location.length === 0) {
      alert("You cannot submit an empty search")
      return
    }

    this.props.setLocation(this.state.location)
    const locationEntry = this.state.location.split(', ')
    const locationData = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationEntry[0]}+${locationEntry[1]}&key=AIzaSyDZ4s1ZJ6ZKIVJgjoehsntM4zlwvkPk7FM`)
      .then(data => data.json())
      .then(data => data.results[0].geometry.location)
      .then(data => {

        this.props.setLatLong(data)

        const date = new Date();
        const today = moment(date);
        const dateLimit = moment(date).add(this.props.dayView, 'day');


        const todayDate = dateLimit.format("DD");
        const todayMonth = dateLimit.format("MM");
        const todayYear = dateLimit.format("YYYY");


        this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=ODE4NjQ0N3wxNTAwMzM1Nzc3Ljg2&lat=${data.lat}&lon=${data.lng}&range=10mi&type=concert&per_page=1000&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate}`)
      })

    this.setState({location: ''})

    this.props.history.push('/')
  }


  render() {

    return(
      <div className="search-component">
        <Search
          items={cityList}
          placeholder='Pick your location'
          onItemsChanged={(e) => {
            if (e[0]) { this.handleChange(e[0].value) }
          }}
        />
        <button onClick={() => this.handleSubmit()} className="submit-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default SearchInput;
