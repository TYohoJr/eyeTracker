import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './StaticDotsOptions.css';
import { connect } from 'react-redux';
import StaticDotsExercise from '../StaticDotsExercise/StaticDotsExercise';
import HomePage from '../../HomePage/HomePage';

class StaticDotsOptions extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onRunButton = this.onRunButton.bind(this);
    this.returnHome = this.returnHome.bind(this);
    this.resetOptions = this.resetOptions.bind(this);
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
      currentPage: <StaticDotsExercise />
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
      type: "resetSD"
    })
  }

  render() {
    return (
      <div>
        <Form id="options-form">
          <FormGroup>
            <Label for="centerDotColor">Center Dot Color: </Label>
            <Input type="select" name="centerDotColor" value={this.props.staticDotsReducer.centerDotColor} onChange={this.onCenterDotColorChange}>
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="extraDotColor">Extra Dot Color: </Label>
            <Input type="select" name="extraDotColor" value={this.props.staticDotsReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
              <option>Red</option>
              <option>Black</option>
              <option>Blue</option>
              <option>Green</option>
            </Input>
          </FormGroup>
          <Button onClick={this.onRunButton}>Run</Button>
          <Button onClick={this.resetOptions}>Reset</Button>
        </Form>
        <Button onClick={this.returnHome}>Home</Button>
      </div >
    );
  }
}

export default connect((state) => (state))(StaticDotsOptions);