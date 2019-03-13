import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './StaticDotsOptions.css';
import { connect } from 'react-redux';
import StaticDotsExercise from '../StaticDotsExercise/StaticDotsExercise';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var saveButton;

class StaticDotsOptions extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onRunButton = this.onRunButton.bind(this);
    this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
  }

  onCenterDotColorChange(e) {
    this.props.dispatch({
      type: "changeSDCenterDotColor",
      centerDotColor: e.target.value
    })
  }

  onExtraDotColorChange(e) {
    this.props.dispatch({
      type: "changeSDExtraDotColor",
      extraDotColor: e.target.value
    })
  }

  onRunButton(e) {
    this.props.dispatch({
      type: "changeCurrentPage",
      currentPage: <StaticDotsExercise />,
      hidden: true
    })
  }

  saveExerciseOptions() {
    if (cookie.get('username')) {
      let exercise = this.props.staticDotsReducer;
      axios.post("/saveStaticDotsExerciseOptions", {
        token: localStorage.getItem('token'),
        username: cookie.get('username'),
        centerDotColor: exercise.centerDotColor,
        extraDotColor: exercise.extraDotColor,
      }).then((result) => {
        if (result.data.message === "Exercise saved successfully") {
          cookie.set('staticDots', result.data.user.staticDots)
          console.log(result.data)
        } else {
          alert(result.data.message)
        }
      })
    }
  }

  componentWillMount() {
    if (cookie.get('username')) {
      saveButton = <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
    }
  }

  render() {
    return (
      <div>
        <Form id="static-dots-options-form" className="options-form">
          <FormGroup>
            <Label for="static-dots-center-dot-color">Center Dot Color: </Label>
            <Input type="select" name="static-dots-center-dot-color" value={this.props.staticDotsReducer.centerDotColor} onChange={this.onCenterDotColorChange}>
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
            <Label for="static-dots-extra-dot-color">Extra Dot Color: </Label>
            <Input type="select" name="static-dots-extra-dot-color" value={this.props.staticDotsReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Green</option>
              <option>Yellow</option>
              <option>Orange</option>
              <option>Purple</option>
              <option>Blue</option>
            </Input>
          </FormGroup>
          <div>
            {saveButton}
            {/* <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button> */}
          </div>
          <Button onClick={this.onRunButton}>Run</Button>
        </Form>
      </div >
    );
  }
}

export default connect((state) => (state))(StaticDotsOptions);