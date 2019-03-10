import React, { Component } from 'react';
import './PursuitsExercise.css';
import { connect } from 'react-redux';
import PursuitsOptions from '../PursuitsOptions/PursuitsOptions';

class PursuitsExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <PursuitsOptions />
        })
    }

    render() {
        var topValue;
        var leftValue;
        var animationName = this.props.pursuitsReducer.direction;
        var animationDuration = 10.5 - this.props.pursuitsReducer.dotSpeed;
        switch (this.props.pursuitsReducer.direction) {
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
                <span id="pursuits-dot" style={{
                    "backgroundColor": this.props.pursuitsReducer.dotColor,
                    "top": `${topValue}%`,
                    "left": `${leftValue}%`,
                    "animationName":`${animationName}`,
                    "animationDuration":`${animationDuration}s`,
                    "animationIterationCount":`${this.props.pursuitsReducer.cycles}`
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(PursuitsExercise);