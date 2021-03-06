import React, { Component } from "react";
import Search from 'react-search';
import cityList from '../../helpers/cityList';
import moment from 'moment';
import apiKey from '../../apiKey';
import formatDate from '../../helpers/formatDate';
import PropTypes from 'prop-types';

class SearchInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      location: ''
    }
  }

  handleChange(value) {
    this.setState({location: value})
  }

  handleSubmit() {
  // test this sad path
    if (this.state.location.length === 0) {
      alert("You cannot submit an empty search. Please select a location before submitting your search.")
      return
    }

    this.props.setLocation(this.state.location)

    const locationEntry = this.state.location.split(', ')

    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationEntry[0]}+${locationEntry[1]}&key=AIzaSyDZ4s1ZJ6ZKIVJgjoehsntM4zlwvkPk7FM`)
      .then(data => data.json())
      .then(data => data.results[0].geometry.location)
      .then(data => {

        this.props.setLatLong(data)

        const date = new Date();
        const dateLimit = moment(date).add(this.props.dayView, 'day');

        const DATE = formatDate(dateLimit);

        this.props.getEventData(`https://api.seatgeek.com/2/events?client_id=${apiKey}&lat=${data.lat}&lon=${data.lng}&range=10mi&type=concert&per_page=1000&datetime_local.lte=${DATE.year}-${DATE.monthNumPadded}-${DATE.dayNumPadded}`)
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
          onItemsChanged={(e) => { if (e[0]) this.handleChange(e[0].value) }}
        />
        <button onClick={() => this.handleSubmit()} className="submit-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default SearchInput;

SearchInput.propTypes = {
  dayView: PropTypes.number,
  getEventData: PropTypes.func,
  history: PropTypes.object,
  setLatLong: PropTypes.func,
  setLocation: PropTypes.func
}
