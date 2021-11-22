import React, { Component } from 'react';
import './css/cover.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Devs from './devs';
import {
  HashRouter as Router,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/devs" element={<Devs />} />
          </Routes>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
