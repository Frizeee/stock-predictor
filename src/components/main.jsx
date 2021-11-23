import React, { Component } from 'react';
import DragDrop from './dragdrop';
import Loading from './loading';
import Chart from './chart';
import Tick from './images/checkmark.png';
import Cross from './images/cross.png';
import Settings from './config.json';

class Main extends React.Component {
  state = {
    waitingUpload: true,
    waitingResponse: false,
    responseArrived: false,
    preds: null,
    uploaded_data: null,
    server_disabled: true,
  };

  constructor(props) {
    super(props);
    this.toggleWaitingForResponse = this.toggleWaitingForResponse.bind(this);
    this.toggleResponseArrived = this.toggleResponseArrived.bind(this);
    this.toggleReset = this.toggleReset.bind(this);
    this.toggleFileUploaded = this.toggleFileUploaded.bind(this);
    this.checkConnection = this.checkConnection.bind(this);
  }

  toggleWaitingForResponse() {
    this.setState({
      waitingUpload: false,
      waitingResponse: true,
      responseArrived: false,
    });
  }

  toggleFileUploaded(uploaded_file) {
    this.setState({
      waitingUpload: false,
      waitingResponse: true,
      responseArrived: false,
      uploaded_data: uploaded_file,
    });
  }

  toggleResponseArrived(preds, uploaded_data) {
    this.setState({
      waitingUpload: false,
      waitingResponse: false,
      responseArrived: true,
      preds: preds,
    });
  }

  toggleReset() {
    this.setState({
      waitingUpload: true,
      waitingResponse: false,
      responseArrived: false,
      preds: null,
      uploaded_data: null,
    });
  }

  checkConnection() {
    fetch(Settings[0].ping_ip, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.status === 'Healthy') {
          this.setState({ server_disabled: false });
        } else {
          this.setState({ server_disabled: true });
        }
      });
  }

  componentDidMount() {
    this.checkConnection();
  }

  render() {
    return (
      <div className="px-3">
        {this.state.waitingUpload &&
          !this.state.waitingResponse &&
          !this.state.responseArrived && (
            <React.Fragment>
              <h1 className="m-5 p-2">Drop some stock data!</h1>
              <DragDrop
                waitingForResponse={this.toggleWaitingForResponse}
                responseArrived={this.toggleResponseArrived}
                uploadedFile={this.toggleFileUploaded}
                serverStatus={this.state.server_disabled}
              />
              <div className="d-flex flex-row justify-content-center align-items-center m-2">
                <div className="p-1">Server status:</div>

                <img
                  src={this.state.server_disabled ? Cross : Tick}
                  className="d-flex p-1 justify-content-center align-items-center"
                  width="26"
                  height="26"
                />
              </div>
              {this.state.server_disabled && (
                <button
                  className="btn btn-sm p-2 pred-btn"
                  onClick={this.checkConnection}
                >
                  RETRY
                </button>
              )}
            </React.Fragment>
          )}
        {!this.state.waitingUpload &&
          this.state.waitingResponse &&
          !this.state.responseArrived && <Loading />}
        {!this.state.waitingUpload &&
          !this.state.waitingResponse &&
          this.state.responseArrived && (
            <React.Fragment>
              <Chart
                predictions={this.state.preds}
                uploaded_data={this.state.uploaded_data}
              />
              <button
                className="btn btn-lg m-5 pred-btn w-50"
                onClick={this.toggleReset}
              >
                Predict another!
              </button>
            </React.Fragment>
          )}
      </div>
    );
  }
}

export default Main;
