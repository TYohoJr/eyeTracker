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
            type: "changeCurrentPage",
            currentPage: <StaticDotsOptions />
        })
    }

    render() {
        return (
            <div>
                <div className="exercise-div">
                    <span id="static-center-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.centerDotColor,
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "50%",
                        "left": "70%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "50%",
                        "left": "90%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "50%",
                        "left": "30%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "50%",
                        "left": "10%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "70%",
                        "left": "50%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "90%",
                        "left": "50%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "30%",
                        "left": "50%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "10%",
                        "left": "50%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "30%",
                        "left": "70%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "70%",
                        "left": "70%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "30%",
                        "left": "30%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "70%",
                        "left": "30%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "90%",
                        "left": "90%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "10%",
                        "left": "90%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "90%",
                        "left": "10%",
                    }} />
                    <span className="static-extra-dot" style={{
                        "backgroundColor": this.props.staticDotsReducer.extraDotColor,
                        "top": "10%",
                        "left": "10%",
                    }} />
                </div>
                <div className="done-btn-div">
                    <button onClick={this.endExercise} className="done-button">Done</button>
                </div>
            </div>
        );
    }
}

export default connect((state) => (state))(StaticDotsExercise);