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
        switch (this.props.pursuitsReducer.startingLocation) {
            case "Top Left":
                topValue = 5;
                leftValue = 5;
                break;
            case "Top Middle":
                topValue = 5;
                leftValue = 50;
                break;
            case "Top Right":
                topValue = 5;
                leftValue = 95;
                break;
            case "Middle Left":
                topValue = 50;
                leftValue = 5;
                break;
            case "Middle":
                topValue = 50;
                leftValue = 50;
                break;
            case "Middle Right":
                topValue = 50;
                leftValue = 95;
                break;
            case "Bottom Left":
                topValue = 95;
                leftValue = 5;
                break;
            case "Bottom Middle":
                topValue = 95;
                leftValue = 50;
                break;
            case "Bottom Right":
                topValue = 95;
                leftValue = 95;
                break;
            default:
                topValue = 50;
                leftValue = 50;
        }
        return (
            <div>
                <span id="static-center-dot" style={{
                    "backgroundColor": this.props.pursuitsReducer.dotColor,
                    "top": `${topValue}%`,
                    "left": `${leftValue}%`,
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(PursuitsExercise);