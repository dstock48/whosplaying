import React, {Component} from 'react';
// Component Imports
import MainContainer from '../../containers/MainContainer';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        <Header />
        <MainContainer />
      </div>
    )
  }

}

export default App
