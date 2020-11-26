import React from 'react';
import firebase from 'firebase/app';
import { BrowserRouter as Router } from 'react-router-dom';
import fbConnection from './helpers/connection';
import Routes from './helpers/Routes';
import MyNavbar from './components/Navbar';

fbConnection();

export default class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <Router>
          <MyNavbar />
          <Routes />
        </Router>
      </div>
    );
  }
}
