import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './Options.css';
import { connect } from 'react-redux';

class Options extends Component {
  constructor() {
    super();
    this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
    this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
    this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
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
            <Label for="dotSpeed">Dot Speed </Label>
            <Input type="number" min="0" max="5" step=".1" placeholder="0" onChange={this.onDotSpeedChange} />
          </FormGroup>
          <Button>Run</Button>
        </Form>
      </div>
    );
  }
}

export default connect((state) => (state))(Options);