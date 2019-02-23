import React, { Component } from 'react';
import './RandomDot.css';
import { connect } from 'react-redux';

class RandomDot extends Component {
  render() {
      var topPercent = Math.floor(Math.random() * 89) + 1;
      var leftPercent = Math.floor(Math.random() * 89) + 1;
      console.log(`top:${topPercent} left:${leftPercent}`)
    return (
      <div>
          <span id="RandomDot" style={{
              "height":"30px",
              "width":"30px",
              "borderRadius":"50%",
              "backgroundColor":this.props.formInputsReducer.extraDotColor,
              "display":"inline-block",
              "position":"fixed",
              "top":`${topPercent}%`,
              "left":`${leftPercent}%`,
            }} />
      </div >
    );
  }
}

export default connect((state) => (state))(RandomDot);