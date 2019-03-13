import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './StaticDotsOptions.css';
import { connect } from 'react-redux';
import StaticDotsExercise from '../StaticDotsExercise/StaticDotsExercise';

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
    console.log("test")
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
            <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
          </div>
          <Button onClick={this.onRunButton}>Run</Button>
        </Form>
      </div >
    );
  }
}

export default connect((state) => (state))(StaticDotsOptions);