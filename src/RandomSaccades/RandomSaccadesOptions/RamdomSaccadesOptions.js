import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RandomSaccadesOptions.css';
import { connect } from 'react-redux';
import EyeTest from '../EyeTest/EyeTest.js';
import HomePage from "../../HomePage/HomePage.js";

class RandomSaccadesOptions extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
    this.onRunButton = this.onRunButton.bind(this);
    this.onDotNumberChange = this.onDotNumberChange.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.resetOptions = this.resetOptions.bind(this);
  }

  onCenterDotColorChange(e) {
    this.props.dispatch({
      type: "changeRSCenterDotColor",
      centerDotColor: e.target.value
    })
  }

  onExtraDotColorChange(e) {
    this.props.dispatch({
      type: "changeRSExtraDotColor",
      extraDotColor: e.target.value
    })
  }

  onDotSpeedChange(e) {
    this.props.dispatch({
      type: "changeRSDotSpeed",
      dotSpeed: e.target.value
    })
  }

  onDotNumberChange(e) {
    this.props.dispatch({
      type: "changeRSDotNumber",
      dotNumber: e.target.value
    })
  }

  onRunButton(e) {
    this.props.dispatch({
      type: "changeCurrentPage",
      currentPage: <EyeTest />
    })
  }

  returnHome() {
    this.props.dispatch({
      type: "changeCurrentPage",
      currentPage: <HomePage />
    })
  }

  resetOptions() {
    this.props.dispatch({
      type: "resetRS"
    })
  }

  render() {
    console.log(this.props.randomSaccadesOptionsReducer.dotSpeed)
    return (
      <div>
        <Form id="options-form">
          <FormGroup>
            <Label for="centerDotColor">Center Dot Color: </Label>
            <Input type="select" name="centerDotColor" value={this.props.randomSaccadesOptionsReducer.centerDotColor} onChange={this.onCenterDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="extraDotColor">Extra Dot Color: </Label>
            <Input type="select" name="extraDotColor" value={this.props.randomSaccadesOptionsReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="dotSpeed">Dot Speed(seconds) </Label>
            <Input type="number" min=".2" max="5" step=".2" value={this.props.randomSaccadesOptionsReducer.dotSpeed} onChange={this.onDotSpeedChange} />
          </FormGroup>
          <FormGroup>
            <Label for="dotNumber">Number of Cycles </Label>
            <Input type="number" min="5" max="30" step="1" value={this.props.randomSaccadesOptionsReducer.dotNumber} onChange={this.onDotNumberChange} />
          </FormGroup>
          <Button onClick={this.onRunButton}>Run</Button>
          <Button onClick={this.resetOptions}>Reset</Button>
        </Form>
        <Button onClick={this.returnHome}>Home</Button>
      </div >
    );
  }
}

export default connect((state) => (state))(RandomSaccadesOptions);