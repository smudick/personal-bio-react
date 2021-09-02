import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from './helpers/connection';
import Routes from './helpers/Routes';

fbConnection();

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <div className='main'>
        <Router>
          {/* <MyNavbar /> */}
          <Routes />
        </Router>
        {/* <Footer /> */}
        </div>
      </div>
    );
  }
}
