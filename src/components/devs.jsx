import React, { Component } from 'react';

class Devs extends React.Component {
  render() {
    return (
      <div>
        <h1 className="m-4 p-5">Developed by</h1>
        <div className="d-flex justify-content-evenly align-items-center row">
          <div className="col-md-3 col-sm-4 m-2">
            <h3>Mate Kadar</h3>
          </div>
          <div className="col-md-3 col-sm-4 m-2">
            <h3>and</h3>
          </div>
          <div className="col-md-3 col-sm-4 m-2">
            <h3>Gergely Dobsinszki</h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Devs;
