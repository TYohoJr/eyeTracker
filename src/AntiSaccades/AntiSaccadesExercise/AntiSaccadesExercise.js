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
        var counter = 0;
        timer = setInterval(() => {
            counter = counter + .5
            if (counter % 2 === 0) {
                let random = Math.floor(Math.random() * 100);
                if (random < 50) {
                    this.props.dispatch({
                        type: "changeHiddenDot",
                        rightHidden: true,
                        leftHidden: false,
                    })
                } else {
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
            }
            if (counter % (this.props.antiSaccadesReducer.cycles * 2) === 0) {
                clearInterval(timer)
            }
        }, 500);
    }

    componentWillUnmount() {
        clearInterval(timer)
    }

    render() {
        return (
            <div>
                <span id="antisaccades-center-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.centerDotColor,
                    "position": "fixed",
                    "top": `50%`,
                    "left": `50%`,
                }} />
                <span hidden={this.props.antiSaccadesReducer.rightHidden} id="antisaccades-right-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    "position": "absolute",
                    "top": `50%`,
                    "left": `60%`,
                }} />
                <span hidden={this.props.antiSaccadesReducer.leftHidden} id="antisaccades-left-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.antiSaccadesReducer.extraDotColor,
                    "position": "absolute",
                    "top": `50%`,
                    "left": `40%`,
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div >
        );
    }
}

export default connect((state) => (state))(AntiSaccadesExercise);