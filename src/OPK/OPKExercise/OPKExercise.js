import React, { Component } from 'react';
import './OPKExercise.css';
import { connect } from 'react-redux';
import OPKOptions from '../OPKOptions/OPKOptions';

class OPKExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <OPKOptions />
        })
    }

    render() {
        return (
            <div>
                <div id="opk-exercise-div" style={{
                    "backgroundColor": `${this.props.opkReducer.backgroundColor}`
                }} />
                <span id="opk-stripe1" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${0}%`,
                    "animationName": "opkSlide1",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe2" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${20}%`,
                    "animationName": "opkSlide2",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe3" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${40}%`,
                    "animationName": "opkSlide3",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe4" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${60}%`,
                    "animationName": "opkSlide4",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe5" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${80}%`,
                    "animationName": "opkSlide5",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe6" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${-20}%`,
                    "animationName": "opkSlide6",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe7" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${-40}%`,
                    "animationName": "opkSlide7",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe8" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${-60}%`,
                    "animationName": "opkSlide8",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe9" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${-80}%`,
                    "animationName": "opkSlide9",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <span id="opk-stripe10" className="opk-stripe" style={{
                    "backgroundColor": this.props.opkReducer.stripeColor,
                    "left": `${-100}%`,
                    "animationName": "opkSlide10",
                    "animationDuration": `${this.props.opkReducer.scrollSpeed}s`
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(OPKExercise);