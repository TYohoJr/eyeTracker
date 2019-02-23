import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Options.css';
import { connect } from 'react-redux';
import EyeTest from '../EyeTest/EyeTest';

class Options extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
    this.onRunButton = this.onRunButton.bind(this);
    this.onDotNumberChange = this.onDotNumberChange.bind(this);
  }

  onCenterDotColorChange(e) {
    this.props.dispatch({
      type: "changeCenterDotColor",
      centerDotColor: e.target.value
    })
  }

  onExtraDotColorChange(e) {
    this.props.dispatch({
      type: "changeExtraDotColor",
      extraDotColor: e.target.value
    })
  }

  onDotSpeedChange(e) {
    this.props.dispatch({
      type: "changeDotSpeed",
      dotSpeed: e.target.value
    })
  }

  onDotNumberChange(e) {
    this.props.dispatch({
      type: "changeDotNumber",
      dotNumber: e.target.value
    })
  }

  onRunButton(e) {
    this.props.dispatch({
      type: "changeCurrentPage",
      currentPage: <EyeTest />
    })
  }

  render() {
    return (
      <div>
        <Form id="options-form">
          <FormGroup>
            <Label for="centerDotColor">Center Dot Color: </Label>
            <Input type="select" name="centerDotColor" onChange={this.onCenterDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="extraDotColor">Extra Dot Color: </Label>
            <Input type="select" name="extraDotColor" onChange={this.onExtraDotColorChange}>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="dotSpeed">Dot Speed(seconds) </Label>
            <Input type="number" min="1" max="5" step=".1" placeholder={this.props.formInputsReducer.dotSpeed} onChange={this.onDotSpeedChange} />
          </FormGroup>
          <FormGroup>
            <Label for="dotNumber">Number of Cycles </Label>
            <Input type="number" min="5" max="30" step="1" placeholder={this.props.formInputsReducer.dotNumber} onChange={this.onDotNumberChange} />
          </FormGroup>
          <Button onClick={this.onRunButton}>Run</Button>
        </Form>
      </div >
    );
  }
}

export default connect((state) => (state))(Options);