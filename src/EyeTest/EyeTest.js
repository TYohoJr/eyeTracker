import React, { Component } from 'react';
import './EyeTest.css';
import { connect } from 'react-redux';
import RandomDot from '../RandomDot/RandomDot.js';
import { Button } from 'reactstrap';
import Options from "../Options/Options.js";

class EyeTest extends Component {
  constructor(){
    super();
    this.onReset = this.onReset.bind(this);
  }

  onReset(e){
    this.props.dispatch({
      type:"changeCurrentPage",
      currentPage: <Options />
    })
  }

  render() {
    return (
      <div>
        <RandomDot />
          <span id="centerDot" style={{
              "height":"30px",
              "width":"30px",
              "borderRadius":"50%",
              "backgroundColor":this.props.formInputsReducer.centerDotColor,
              "display":"inline-block",
              "position":"fixed",
              "top":"50%",
              "left":"50%",
            }} />
            <Button style={{
              "position":"fixed",
              "bottom":"0px",
              "left":"50%",
            }} onClick={this.onReset}>Reset</Button>
      </div >
    );
  }
}

export default connect((state) => (state))(EyeTest);