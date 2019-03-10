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
        var combinationSteps;
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
                combinationSteps = currentArray[0].dotSteps;
            } else if (currentArray[0].exerciseType === "Pursuits") {
                animationDelayS = 9.9 - currentArray[0].dotSpeed;
                animationNameP = currentArray[0].direction;
                animationNameS = currentArray[1].direction;
                combinationSteps = currentArray[1].dotSteps;
            }
            dotSpeed = 10 - currentArray[0].dotSpeed;
            animationDuration = 10 - currentArray[0].dotSpeed;
        }
        return (
            <div>
                <div className="exercise-div">
                    <span id="combination-pursuits-dot" style={{
                        "backgroundColor": this.props.combinationReducer.dotColor,
                        "animationName": `${animationNameP}`,
                        "animationDuration": `${animationDuration}s`,
                        "animationDelay": `${animationDelayP}s`,
                        "animationFillMode":"forwards",
                    }} />
                    <span id="combination-saccades-dot" style={{
                        "backgroundColor": this.props.combinationReducer.dotColor,
                        "animation": `${animationNameS} ${dotSpeed}s steps(${combinationSteps})`,
                        "animationDelay": `${animationDelayS}s`,
                        "animationFillMode":"forwards",
                    }} />
                </div>
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(CombinationExercise);