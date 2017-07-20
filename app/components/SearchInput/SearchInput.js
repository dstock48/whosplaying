import React, { Component } from "react";

class SearchInput extends Component {
  constructor() {
    super()

    this.state = {
      city: ''
    }
  }

  handleChange(e) {
    this.setState({city: e.target.value})
  }


  render() {
    return(
      <div className="search-component">
        <input onChange={(e) => this.handleChange(e)} type="text" placeholder="Enter City" value={this.state.city}/><button className="submit-btn"><i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default SearchInput;
