import React, { Component } from 'react';
import './css/cover.css';
import Header from './header';
import Main from './main';
import Footer from './footer';
import Devs from './devs';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from 'react-router-dom';

const Routing = () => {
  let routes = useRoutes([
    { path: '/', element: <Main /> },
    { path: '/devs', element: <Devs /> },
  ]);
  return routes;
};

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
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
