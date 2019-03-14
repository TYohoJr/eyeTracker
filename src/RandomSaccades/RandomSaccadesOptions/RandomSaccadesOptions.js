import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './RandomSaccadesOptions.css';
import { connect } from 'react-redux';
import RandomSaccadesExercise from '../RandomSaccadesExercise/RandomSaccadesExercise.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var saveButton;

class RandomSaccadesOptions extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
    this.onRunButton = this.onRunButton.bind(this);
    this.onDotNumberChange = this.onDotNumberChange.bind(this);
    this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
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
      currentPage: <RandomSaccadesExercise />,
      hidden: true
    })
  }

  saveExerciseOptions() {
    if (cookie.get('username')) {
      let exercise = this.props.randomSaccadesReducer;
      axios.post("/saveRandomSaccadesExerciseOptions", {
        token: localStorage.getItem('token'),
        username: cookie.get('username'),
        centerDotColor: exercise.centerDotColor,
        extraDotColor: exercise.extraDotColor,
        dotSpeed: exercise.dotSpeed,
        dotNumber: exercise.dotNumber,
      }).then((result) => {
        alert(result.data.message)
      }).catch((error) => {
        alert(error)
      })
    }
  }

  componentWillMount() {
    if (cookie.get('username')) {
      saveButton = <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
    }
    if (cookie.get('data').randomSaccades.length) {
      let data = cookie.get('data')
      this.props.dispatch({
        type: "savedExerciseRandomSaccades",
        centerDotColor: data.randomSaccades[0],
        extraDotColor: data.randomSaccades[1],
        dotSpeed: data.randomSaccades[2],
        dotNumber: data.randomSaccades[3],
      });
    }
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
            <Input type="number" name="random-saccades-dot-speed" min="1" max="7" step="1" value={this.props.randomSaccadesReducer.dotSpeed} onChange={this.onDotSpeedChange} />
          </FormGroup>
          <FormGroup>
            <Label for="random-saccades-cycles">Number of Cycles: </Label>
            <Input type="select" name="random-saccades-cycles" value={this.props.randomSaccadesReducer.dotNumber} onChange={this.onDotNumberChange}>
              <option>10</option>
              <option>20</option>
              <option>30</option>
              <option>Infinite</option>
            </Input>
          </FormGroup>
          <div>
            {saveButton}
          </div>
          <Button color="success" onClick={this.onRunButton}>Run</Button>
        </Form>
      </div >
    );
  }
}

export default connect((state) => (state))(RandomSaccadesOptions);