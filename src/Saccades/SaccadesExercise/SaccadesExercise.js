import React, { Component } from 'react';
import './SaccadesExercise.css';
import { connect } from 'react-redux';
import SaccadesOptions from "../SaccadesOptions/SaccadesOptions";

class SaccadesExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <SaccadesOptions />
        })
    }

    render() {
        var topValue;
        var leftValue;
        var steps = this.props.saccadesReducer.steps;
        var cycles = this.props.saccadesReducer.cycles;
        var dotSpeed = 10 - this.props.saccadesReducer.dotSpeed;
        var animationName = this.props.saccadesReducer.direction;
        switch (this.props.saccadesReducer.direction) {
            case "TLtoBR":
                topValue = 5;
                leftValue = 5;
                break;
            case "TMtoBM":
                topValue = 5;
                leftValue = 50;
                break;
            case "TRtoBL":
                topValue = 5;
                leftValue = 95;
                break;
            case "MLtoMR":
                topValue = 50;
                leftValue = 5;
                break;
            case "MRtoML":
                topValue = 50;
                leftValue = 95;
                break;
            case "BLtoTR":
                topValue = 95;
                leftValue = 5;
                break;
            case "BMtoTM":
                topValue = 95;
                leftValue = 50;
                break;
            case "BRtoTL":
                topValue = 95;
                leftValue = 95;
                break;
            default:
                topValue = 50;
                leftValue = 50;
        }
        return (
            <div>
                <span id="saccades-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.saccadesReducer.dotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": `${topValue}%`,
                    "left": `${leftValue}%`,
                    "animation":`${animationName} ${dotSpeed}s steps(${steps}) ${.25}s ${cycles}`,
                    "animationFillMode":"both",
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div >
        );
    }
}

export default connect((state) => (state))(SaccadesExercise);