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
        var animationNameP;
        var animationNameS;
        var animationDuration;
        var animationDelayP = 0;
        var animationDelayS = 0;

        if (currentArray[0]) {
            if (currentArray[0].exerciseType === "Saccades") {
                animationDelayP = 9.9 - currentArray[0].dotSpeed;
                animationNameS = currentArray[0].direction;
                animationNameP = currentArray[1].direction;
            } else if (currentArray[0].exerciseType === "Pursuit") {
                animationDelayS = 9.9 - currentArray[0].dotSpeed;
                animationNameP = currentArray[0].direction;
                animationNameS = currentArray[1].direction;
            }
            steps = currentArray[0].dotSteps;
            dotSpeed = 10 - currentArray[0].dotSpeed;
            animationDuration = 10 - currentArray[0].dotSpeed;
        }

        return (
            <div>
                <span id="combination-pursuits-dot" style={{
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "animationName": `${animationNameP}`,
                    "animationDuration": `${animationDuration}s`,
                    "animationDelay": `${animationDelayP}s`
                }} />
                <span id="combination-saccades-dot" style={{
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "animation": `${animationNameS} ${dotSpeed}s steps(${steps})`,
                    "animationDelay": `${animationDelayS}s`
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(CombinationExercise);