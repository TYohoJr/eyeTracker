import React, { Component } from 'react';
import './AntiSaccadesExercise.css';
import { connect } from 'react-redux';
import AntiSaccadesOptions from "../AntiSaccadesOptions/AntiSaccadesOptions";

class AntiSaccadesExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <AntiSaccadesOptions />
        })
    }

    render() {
        var leftHidden = "hidden";
        var rightHidden;
        return (
            <div>
                <span id="antisaccades-center-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.centerDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": `50%`,
                    "left": `50%`,
                }} />
                <span id="antisaccades-center-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": `50%`,
                    "left": `60%`,
                    "visibility": `${rightHidden}`,
                }} />
                <span id="antisaccades-center-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": `50%`,
                    "left": `40%`,
                    "visibility": `${leftHidden}`,
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div >
        );
    }
}

export default connect((state) => (state))(AntiSaccadesExercise);