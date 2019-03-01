import React, { Component } from 'react';
import './StaticDotsExercise.css';
import { connect } from 'react-redux';
import StaticDotsOptions from '../StaticDotsOptions/StaticDotsOptions';

class StaticDotsExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<StaticDotsOptions />
        })
    }

    render() {
        return (
            <div>
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
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "50%",
                    "left": "70%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "50%",
                    "left": "90%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "50%",
                    "left": "30%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "50%",
                    "left": "10%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "70%",
                    "left": "50%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "90%",
                    "left": "50%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "30%",
                    "left": "50%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "10%",
                    "left": "50%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "30%",
                    "left": "70%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "70%",
                    "left": "70%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "30%",
                    "left": "30%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "70%",
                    "left": "30%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "90%",
                    "left": "90%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "10%",
                    "left": "90%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "90%",
                    "left": "10%",
                }} />
                <span id="centerDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.formInputsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": "10%",
                    "left": "10%",
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(StaticDotsExercise);