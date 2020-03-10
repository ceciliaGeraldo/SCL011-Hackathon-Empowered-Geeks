import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './App.css';
import VideoInput from './assets/views/VideoInput/VideoInput';

import Home from './assets/views/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router history={createHistory()}>
          <div className="route">
            <Route exact path="/" component={Home} />
            <Route exact path="/camera" component={VideoInput} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;