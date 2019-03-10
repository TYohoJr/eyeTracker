import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RandomSaccadesOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import RandomSaccadesExercise from '../RandomSaccadesExercise/RandomSaccadesExercise.js';

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
      currentPage: <RandomSaccadesExercise />
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
    return (
      <div>
        <Form id="random-saccades-options-form" className="options-form">
          <FormGroup>
            <Label for="random-saccades-center-dot-color">Center Dot Color: </Label>
            <Input type="select" name="random-saccades-center-dot-color" value={this.props.randomSaccadesReducer.centerDotColor} onChange={this.onCenterDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Blue</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="random-saccades-extra-dot-color">Extra Dot Color: </Label>
            <Input type="select" name="random-saccades-extra-dot-color" value={this.props.randomSaccadesReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Blue</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="random-saccades-dot-speed">Dot Speed(seconds): </Label>
            <Input type="number" name="random-saccades-dot-speed" min=".2" max="5" step=".2" value={this.props.randomSaccadesReducer.dotSpeed} onChange={this.onDotSpeedChange} />
          </FormGroup>
          <FormGroup>
            <Label for="random-saccades-cycles">Number of Cycles: </Label>
            <Input type="number" name="random-saccades-cycles" min="5" max="30" step="1" value={this.props.randomSaccadesReducer.dotNumber} onChange={this.onDotNumberChange} />
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