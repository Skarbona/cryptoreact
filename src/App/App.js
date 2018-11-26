import React, { Component } from 'react';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import AppProvider from './containers/AppProvider';
import Settings from './components/Settings/'

class Index extends Component {
  render() {
    return (
      <div className="crypto-wrapper">
          <AppProvider>
              <AppBar/>
              <Settings/>
          </AppProvider>
      </div>
    );
  }
}

export default Index;
