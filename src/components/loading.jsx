import React, { Component } from 'react';
import { Ring } from 'react-cssfx-loading/lib';

class Loading extends React.Component {
  render() {
    return (
      <div>
        <h1 className="m-4">Making predictions</h1>
        <Ring
          color="rgb(234, 162, 33)"
          height="140px"
          width="140px"
          duration="0.87s"
        />
      </div>
    );
  }
}

export default Loading;
