import React, { Component } from 'react';
import './EyeTest.css';
import { connect } from 'react-redux';

class EyeTest extends Component {
  render() {
    return (
      <div>
          <span id="centerDot" style={{
              "height":"30px",
              "width":"30px",
              "border-radius":"50%",
              "background-color":this.props.formInputsReducer.centerDotColor,
              "display":"inline-block",
              "position":"fixed",
              "top":"50%",
              "left":"50%",
            }} />
          <span id="extraDot" style={{
              "height":"30px"
              ,"width":"30px",
              "border-radius":"50%",
              "background-color":this.props.formInputsReducer.extraDotColor,
              "display":"inline-block",
              "position":"fixed",
              "top":"25%",
              "left":"25%",
            }} />  
      </div >
    );
  }
}

export default connect((state) => (state))(EyeTest);