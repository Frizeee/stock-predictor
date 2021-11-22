import React, { Component } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import Settings from './config.json';

const fileTypes = ['JSON'];

class DragDrop extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(uploaded_file) {
    const file_reader = new FileReader();

    file_reader.onload = (e) => {
      this.props.uploadedFile(e.target.result);
      //send JSON stock data to TorchServe image
      fetch(Settings[0].ip, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: e.target.result,
      })
        .then((response) => response.json())
        .then((data) => this.props.responseArrived(data));
    };

    file_reader.readAsText(uploaded_file);
    this.props.waitingForResponse();
  }

  render() {
    return (
      <FileUploader
        classes="mw-100 dnd-border"
        handleChange={this.handleChange}
        name="uploaded_file"
        types={fileTypes}
        hoverTitle="Drop here!"
        minSize={0}
        disabled={this.props.serverStatus}
      />
    );
  }
}

export default DragDrop;
