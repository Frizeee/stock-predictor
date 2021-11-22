import React, { Component } from 'react';
import './css/cover.css';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      devs: false,
    };

    this.handleClicks = this.handleClicks.bind(this);
  }

  handleClicks(btn) {
    if (btn === 'home') {
      this.setState({ home: true, devs: false });
    }
    if (btn === 'devs') {
      this.setState({ home: false, devs: true });
    }
  }

  render() {
    let home = this.state.home ? 'nav-link ' + 'active' : 'nav-link ';
    let devs = this.state.devs ? 'nav-link ' + 'active' : 'nav-link ';
    return (
      <header className="mb-auto">
        <div>
          <h3 className="float-md-start mb-0">Stock Predictor</h3>
          <nav className="nav nav-masthead justify-content-center float-md-end">
            <Link
              className={home}
              to="/"
              onClick={() => this.handleClicks('home')}
            >
              Home
            </Link>
            <Link
              className={devs}
              to="/devs"
              onClick={() => this.handleClicks('devs')}
            >
              Developers
            </Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
