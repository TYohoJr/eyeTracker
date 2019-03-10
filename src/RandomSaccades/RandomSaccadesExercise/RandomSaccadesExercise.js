import React, { Component } from 'react';
import './RandomSaccadesExercise.css';
import { connect } from 'react-redux';
import RandomSaccadesOptions from "../RandomSaccadesOptions/RamdomSaccadesOptions";

var counter = 0;

class RandomSaccadesExercise extends Component {
    componentDidMount() {
        console.log(this.props.randomSaccadesReducer.dotSpeed)
        this.timerID = setInterval(() => {
            if (counter === this.props.randomSaccadesReducer.dotNumber) {
                counter = 1;
                this.props.dispatch({
                    type: "changeCurrentPage",
                    currentPage: <RandomSaccadesOptions />
                })
                clearInterval(this.timerID);
            } else {
                this.props.dispatch({
                    type: "changeDotLocation",
                    topPercent: Math.floor(Math.random() * 89),
                    leftPercent: Math.floor(Math.random() * 89),
                })
                counter++;
            }
            console.log(this.props.dotPlacementReducer.topPercent)
        }, this.props.randomSaccadesReducer.dotSpeed * 1000)
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
            </div >
        );
    }
}

export default connect((state) => (state))(RandomSaccadesExercise);