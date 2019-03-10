import React, { Component } from 'react';
import './AntiSaccadesExercise.css';
import { connect } from 'react-redux';
import AntiSaccadesOptions from "../AntiSaccadesOptions/AntiSaccadesOptions";

var timer;

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

    componentDidMount() {
        let counter = 0;
        timer = setInterval(() => {
            counter = counter + .5
            if (counter % 2 === 0) {
                let random = Math.floor(Math.random() * 100);
                if (random < 11 && this.props.antiSaccadesReducer.goNoGo === "On") {
                    this.props.dispatch({
                        type: "changeAntiSaccadesExtraDotColor",
                        extraDotColor: this.props.antiSaccadesReducer.goNoGoDotColor,
                    })
                    this.props.dispatch({
                        type: "changeHiddenDot",
                        rightHidden: true,
                        leftHidden: false,
                    })
                } else if (random > 89 && this.props.antiSaccadesReducer.goNoGo === "On") {
                    this.props.dispatch({
                        type: "changeAntiSaccadesExtraDotColor",
                        extraDotColor: this.props.antiSaccadesReducer.goNoGoDotColor,
                    })
                    this.props.dispatch({
                        type: "changeHiddenDot",
                        rightHidden: false,
                        leftHidden: true,
                    })
                } else if (random < 50) {
                    this.props.dispatch({
                        type: "changeHiddenDot",
                        rightHidden: true,
                        leftHidden: false,
                    })
                } else if (random > 50) {
                    this.props.dispatch({
                        type: "changeHiddenDot",
                        rightHidden: false,
                        leftHidden: true,
                    })
                }
            } else {
                this.props.dispatch({
                    type: "changeHiddenDot",
                    rightHidden: true,
                    leftHidden: true,
                })
                this.props.dispatch({
                    type: "changeAntiSaccadesExtraDotColor",
                    extraDotColor: this.props.antiSaccadesReducer.trueExtraDotColor,
                })
            }
            if (counter % (this.props.antiSaccadesReducer.cycles * 2) === 0) {
                clearInterval(timer)
                this.props.dispatch({
                    type: "changeCurrentPage",
                    currentPage: <AntiSaccadesOptions />
                })
            }
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    render() {
        console.log(this.props.antiSaccadesReducer)
        return (
            <div>
                <div className="exercise-div">
                    <span id="antisaccades-center-dot" style={{
                        "backgroundColor": this.props.antiSaccadesReducer.centerDotColor,
                    }} />
                    <span hidden={this.props.antiSaccadesReducer.rightHidden} id="antisaccades-right-dot" style={{
                        "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    }} />
                    <span hidden={this.props.antiSaccadesReducer.leftHidden} id="antisaccades-left-dot" style={{
                        "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    }} />
                </div>
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div >
        );
    }
}

export default connect((state) => (state))(AntiSaccadesExercise);