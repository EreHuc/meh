import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { api } from './services/blizzard_api';
import { getAccessToken, setOauthTokenCookie } from './utils';

class App extends Component {
  constructor(props) {
    super(props);

    if (!getAccessToken().length) {
      api.auth().then(tokenObject => {
        setOauthTokenCookie(tokenObject);
      });
    }

    // api.character({
    //   characterName: 'Quaheh',
    //   realm: 'Dalaran',
    // }).then(res => console.log(res))

    api.bosses().then(res => console.log(res));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
