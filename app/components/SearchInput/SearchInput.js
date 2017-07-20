import React, { Component } from "react";

class SearchInput extends Component {
  constructor() {
    super()

    this.state = {
      location: ''
    }
  }

  handleChange(e) {
    this.setState({location: e.target.value})
  }

  handleSubmit() {
    console.log(this.state.location);
    this.props.setLocation(this.state.location)
    const locationEntry = this.state.location.split(', ')
    const locationData = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${locationEntry[0]}+${locationEntry[1]}&key=AIzaSyDZ4s1ZJ6ZKIVJgjoehsntM4zlwvkPk7FM`)
      .then(data => data.json())
      .then(data => data.results[0].geometry.location)
      .then(data => {

        const today = new Date();
        const todayDate = today.getDate();
        const todayMonth = today.getMonth() + 1;
        const todayYear = today.getFullYear();

        this.props.getSearchEventData(`https://api.seatgeek.com/2/events?client_id=ODE4NjQ0N3wxNTAwMzM1Nzc3Ljg2&lat=${data.lat}&lon=${data.lng}&range=12mi&type=concert&per_page=25&datetime_local.lte=${todayYear}-${todayMonth}-${todayDate + 2}`)
      })

    this.setState({location: ''})
  }


  render() {
    return(
      <div className="search-component">
        <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter City" value={this.state.location}/>
        <button onClick={() => this.handleSubmit()} className="submit-btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default SearchInput;
