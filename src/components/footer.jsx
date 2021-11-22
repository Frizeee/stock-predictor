import React, { Component } from 'react';
import './css/cover.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="mt-auto text-white-50">
        <p>
          Data from{' '}
          <a href="https://www.google.com/finance/" className="text-white">
            Google Finance
          </a>
          , using{' '}
          <a href="https://pytorch.org/" className="text-white">
            PyTorch
          </a>
          {' as ML library'}.
        </p>
      </footer>
    );
  }
}

export default Footer;
