import React, { Component } from 'react';
import './RandomSaccadesExercise.css';
import { connect } from 'react-redux';
import RandomSaccadesOptions from "../RandomSaccadesOptions/RandomSaccadesOptions.js";

var counter = 0;
var timer;

class RandomSaccadesExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
        })
    }

    componentDidMount() {
        timer = setInterval(() => {
            if (counter === this.props.randomSaccadesReducer.dotNumber) {
                counter = 1;
                this.props.dispatch({
                    type: "changeCurrentPage",
                    currentPage: <RandomSaccadesOptions />
                })
                clearInterval(this.timerID);
            } else {
                let topPercentNumber = Math.floor(Math.random() * 89);
                let leftPercentNumber = Math.floor(Math.random() * 89);
                if ((topPercentNumber > 45 && topPercentNumber < 55) && (leftPercentNumber > 45 && leftPercentNumber < 55)) {
                    topPercentNumber = Math.floor(Math.random() * 89);
                    leftPercentNumber = Math.floor(Math.random() * 89);
                }
                this.props.dispatch({
                    type: "changeDotLocation",
                    topPercent: topPercentNumber,
                    leftPercent: leftPercentNumber,
                })
                counter++;
            }
        }, this.props.randomSaccadesReducer.dotSpeed * 1000)
    }

    componentWillUnmount() {
        clearInterval(timer);
    }

    render() {
        return (
            <div>
                <span id="random-saccades-center-dot" style={{
                    "backgroundColor": this.props.randomSaccadesReducer.centerDotColor,
                }} />
                <span id="random-saccades-extra-dot" style={{
                    "backgroundColor": this.props.randomSaccadesReducer.extraDotColor,
                    "top": this.props.dotPlacementReducer.topPercent,
                    "left": this.props.dotPlacementReducer.leftPercent,
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div >
        );
    }
}

export default connect((state) => (state))(RandomSaccadesExercise);