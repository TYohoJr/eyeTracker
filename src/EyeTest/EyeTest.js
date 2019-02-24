import React, { Component } from 'react';
import './EyeTest.css';
import { connect } from 'react-redux';
import RandomDot from '../RandomDot/RandomDot.js';

class EyeTest extends Component {
  render() {
    return (
      <div>
        <RandomDot />
        <span id="centerDot" style={{
          "height": "30px",
          "width": "30px",
          "borderRadius": "50%",
          "backgroundColor": this.props.formInputsReducer.centerDotColor,
          "display": "inline-block",
          "position": "fixed",
          "top": "50%",
          "left": "50%",
        }} />
      </div >
    );
  }
}

export default connect((state) => (state))(EyeTest);