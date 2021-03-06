import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import UserList from './containers/users-list'
import ActiveUserDetails from './containers/user-details'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <h2>User Name:</h2>
          <UserList />
          <hr />
          <h2>User Details:</h2>
          <ActiveUserDetails/>
        </div>
      </div>
    );
  }
}

export default App;
