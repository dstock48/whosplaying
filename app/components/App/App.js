import React, {Component} from 'react';
// import { Route } from 'react-router';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// Component Imports
import MainContainer from '../../containers/MainContainer';
import EventDetailContainer from '../../containers/EventDetailContainer';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return(
      <Router>
        <div>
          {/* <Header /> */}
          <Route path='/' component={Header} />
          <Route path='/' exact component={MainContainer} />
          <Route path='/event-details/:id' component={EventDetailContainer} />
        </div>
      </Router>
    )
  }

}

export default App
