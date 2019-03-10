import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './AntiSaccadesOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import AntiSaccadesExercise from '../AntiSaccadesExercise/AntiSaccadesExercise.js';

var goNoGoTest;

class AntiSaccadesOptions extends Component {
    constructor() {
        super();
        this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
        this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
        // this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onCyclesChange = this.onCyclesChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
        this.onGoNoGoChange = this.onGoNoGoChange.bind(this);
        this.onGoNoGoDotColorChange = this.onGoNoGoDotColorChange.bind(this);
    }

    onCenterDotColorChange(e) {
        this.props.dispatch({
            type: "changeAntiSaccadesCenterDotColor",
            centerDotColor: e.target.value
        })
    }

    onExtraDotColorChange(e) {
        this.props.dispatch({
            type: "changeAntiSaccadesExtraDotColor",
            extraDotColor: e.target.value
        })
    }

    // onDotSpeedChange(e) {
    //     this.props.dispatch({
    //         type: "changeAntiSaccadesDotSpeed",
    //         dotSpeed: e.target.value
    //     })
    // }

    onCyclesChange(e) {
        this.props.dispatch({
            type: "changeAntiSaccadesCycles",
            cycles: e.target.value
        })
    }

    onGoNoGoChange(e) {
        this.props.dispatch({
            type: "changeAntiSaccadesGoNoGo",
            goNoGo: e.target.value
        })
    }

    onGoNoGoDotColorChange(e) {
        this.props.dispatch({
            type: "changeAntiSaccadesGoNoGoDotColor",
            goNoGoDotColor: e.target.value
        })
    }

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <AntiSaccadesExercise />
        })
    }

    returnHome() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <HomePage />
        })
    }

    resetOptions() {
        this.props.dispatch({
            type: "resetAntiSaccades"
        })
    }

    componentDidUpdate() {

    }

    render() {
        if (this.props.antiSaccadesReducer.goNoGo === "On") {
            goNoGoTest = false
        } else {
            goNoGoTest = true
        }
        return (
            <div>
                <Form id="anti-saccades-options-form" className="options-form">
                    <FormGroup>
                        <Label for="anti-saccades-center-dot-color">Center Dot Color: </Label>
                        <Input type="select" name="anti-saccades-center-dot-color" value={this.props.antiSaccadesReducer.centerDotColor} onChange={this.onCenterDotColorChange}>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="anti-saccades-extra-dot-color">Extra Dots Color: </Label>
                        <Input type="select" name="anti-saccades-extra-dot-color" value={this.props.antiSaccadesReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
                            <option>Red</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    {/* <FormGroup>
                        <Label for="dotSpeed">Dot Speed: </Label>
                        <Input type="number" min="1" max="10" step="1" value={this.props.antiSaccadesReducer.dotSpeed} onChange={this.onDotSpeedChange} />
                    </FormGroup> */}
                    <FormGroup>
                        <Label for="anti-saccades-cycles">Number of Cycles: </Label>
                        <Input type="select" name="anti-saccades-cycles" value={this.props.antiSaccadesReducer.cycles} onChange={this.onCyclesChange}>
                            <option>10</option>
                            <option>20</option>
                            <option>30</option>
                            <option>Infinite</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="anti-saccades-gonogo">Go/No-Go: </Label>
                        <Input type="select" name="anti-saccades-gonogo" value={this.props.antiSaccadesReducer.goNoGo} onChange={this.onGoNoGoChange}>
                            <option>Off</option>
                            <option>On</option>
                        </Input>
                    </FormGroup>
                    <FormGroup hidden={goNoGoTest}>
                        <Label for="anti-saccades-gonogo-dot-color">Go/No-Go Dot Color: </Label>
                        <Input type="select" name="anti-saccades-gonogo-dot-color" value={this.props.antiSaccadesReducer.goNoGoDotColor} onChange={this.onGoNoGoDotColorChange}>
                            <option>Green</option>
                            <option>Blue</option>
                            <option>Yellow</option>
                            <option>Purple</option>
                        </Input>
                    </FormGroup>
                    <Button onClick={this.onRunButton}>Run</Button>
                    <Button onClick={this.resetOptions}>Reset</Button>
                </Form>
                <Button onClick={this.returnHome}>Home</Button>
            </div >
        );
    }
}

export default connect((state) => (state))(AntiSaccadesOptions);