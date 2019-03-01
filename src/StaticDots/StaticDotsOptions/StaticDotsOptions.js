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

  onRunButton(e) {
    this.props.dispatch({
      type: "changeCurrentPage",
      currentPage: <StaticDotsExercise />
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
          <Button onClick={this.onRunButton}>Run</Button>
        </Form>
      </div >
    );
  }
}

export default connect((state) => (state))(StaticDotsOptions);