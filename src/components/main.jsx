import React, { Component } from 'react';
import DragDrop from './dragdrop';
import Loading from './loading';
import Chart from './chart';
import { Button } from 'bootstrap';

class Main extends React.Component {
  state = {
    waitingUpload: true,
    waitingResponse: false,
    responseArrived: false,
    preds: null,
    uploaded_data: null,
  };

  constructor(props) {
    super(props);
    this.toggleWaitingForResponse = this.toggleWaitingForResponse.bind(this);
    this.toggleResponseArrived = this.toggleResponseArrived.bind(this);
    this.toggleReset = this.toggleReset.bind(this);
    this.toggleFileUploaded = this.toggleFileUploaded.bind(this);
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

  render() {
    return (
      <div className="px-3">
        {this.state.waitingUpload &&
          !this.state.waitingResponse &&
          !this.state.responseArrived && (
            <React.Fragment>
              <h1 className="m-5">Drop some stock data!</h1>
              <DragDrop
                waitingForResponse={this.toggleWaitingForResponse}
                responseArrived={this.toggleResponseArrived}
                uploadedFile={this.toggleFileUploaded}
              />
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
