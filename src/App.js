import React, { Component } from 'react';
import logo from './logo.svg';
import { Router, Route, Switch } from 'react-router-dom';
import AppViews from './components/app-views';
import MainMenu from './components/menus/main-menu';
import createHistory from 'history/createBrowserHistory';
import { Transitions } from './transitions/transition-group-component';
import { Routes } from './routes';
import './App.css';

const history = createHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route
          render={({ location }) => {
            return (
              <div className="App">
                <header className="App-header">
                  <MainMenu history={history} />
                </header>
                <div id="route-container">
                  <Transitions pageKey={location.key} {...location.state}>
                    <Switch location={location} />
                    <Routes />
                    <Switch />
                  </Transitions>
                </div>
              </div>
            );
          }}
        />
      </Router>
    );
  }
}

export default App;
