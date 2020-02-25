import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

import ColorfulTiles from './pages/ColorfulTiles';
import GenerateHistory from './pages/ColorfulTiles/GenerateForm/GenerateHistory';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import './App.scss';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="app">
          <BrowserRouter>
            <Header/>
            <Switch>
              <Route exact path="/" component={ ColorfulTiles }/>
              <Route exact path="/history" component={GenerateHistory}/>
              <Route component={ NotFound }/>
            </Switch>
          </BrowserRouter>
        </div>
      </Provider>
    )
  }
}

export default App;
