import React, { Component } from 'react';
import './App.scss';
import AppBar from './components/AppBar/AppBar';
import AppProvider from './containers/AppProvider';
import Settings from './components/Settings/'
import Content from './components/Shared/Content'
import Dashboard from './components/Dashboard'
import ThemeWrapper from './components/Shared/ThemeWrapper'

class App extends Component {
  render() {
    return (
          <AppProvider>
              <ThemeWrapper>
              <AppBar/>
              <Content>
                <Settings/>
                <Dashboard/>
              </Content>
              </ThemeWrapper>
          </AppProvider>
    );
  }
}

export default App;
