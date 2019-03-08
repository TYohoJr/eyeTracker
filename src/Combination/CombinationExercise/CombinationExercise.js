import React, { Component } from 'react';
import './CombinationExercise.css';
import { connect } from 'react-redux';
import CombinationOptions from '../CombinationOptions/CombinationOptions';

class CombinationExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <CombinationOptions />
        })
    }

    render() {
        var currentArray = this.props.combinationReducer.masterArray
        var steps;
        var dotSpeed;
        var animationName;
        var animationDuration;
        var animationDelayP;
        var animationDelayS;

        if (currentArray[0]) {
            if (currentArray[0].exerciseType === "Saccades") {
                animationDelayP = 10;
            } else if (currentArray[0].exerciseType === "Pursuit") {
                animationDelayS = 10;
            }
            steps = currentArray[0].dotSteps;
            dotSpeed = 10 - currentArray[0].dotSpeed;
            animationName = currentArray[0].direction;
            animationDuration = 10.5 - currentArray[0].dotSpeed;
        }
        setTimeout(() => {
            if (currentArray[1].exerciseType === "Saccades") {
                animationDelayP = 10;
            } else if (currentArray[1].exerciseType === "Pursuit") {
                animationDelayS = 10;
            }
            steps = currentArray[1].dotSteps;
            dotSpeed = 10 - currentArray[1].dotSpeed;
            animationName = currentArray[1].direction;
            animationDuration = 10 - currentArray[1].dotSpeed;
            console.log("test")
        }, 1000);
        return (
            <div>
                <span id="pursuits-dot" style={{
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "display": `inline-block`,
                    "top": `150%`,
                    "left": `150%`,
                    "animationName": `${animationName}`,
                    "animationDuration": `${animationDuration}s`,
                    "animationDelay": `${animationDelayP}s`
                }} />
                <span id="saccades-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "display": `inline-block`,
                    "position": "fixed",
                    "top": `150%`,
                    "left": `150%`,
                    "animation": `${animationName} ${dotSpeed}s steps(${steps})`,
                    "animationFillMode": "forwards",
                    "animationDelay": `${animationDelayS}s`
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(CombinationExercise);