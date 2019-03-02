import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SaccadesOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import SaccadesExercise from '../SaccadesExercise/SaccadesExercise.js';

class SaccadesOptions extends Component {
    constructor() {
        super();
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onCyclesChange = this.onCyclesChange.bind(this);
        this.onStepsChange = this.onStepsChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
    }

    onDotColorChange(e) {
        this.props.dispatch({
            type: "changeSaccadesDotColor",
            dotColor: e.target.value
        })
    }

    onDirectionChange(e) {
        this.props.dispatch({
            type: "changeSaccadesDirection",
            direction: e.target.value
        })
    }

    onDotSpeedChange(e) {
        this.props.dispatch({
            type: "changeSaccadesDotSpeed",
            dotSpeed: e.target.value
        })
    }

    onCyclesChange(e) {
        this.props.dispatch({
            type: "changeSaccadesCycles",
            cycles: e.target.value
        })
    }

    onStepsChange(e) {
        this.props.dispatch({
            type: "changeSaccadesSteps",
            steps: e.target.value
        })
    }

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <SaccadesExercise />
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
            type: "resetSaccades"
        })
    }

    render() {
        return (
            <div>
                <Form id="options-form">
                    <FormGroup>
                        <Label for="centerDotColor">Dot Color: </Label>
                        <Input type="select" name="centerDotColor" value={this.props.saccadesReducer.dotColor} onChange={this.onDotColorChange}>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="extraDotColor">Dot Movement: </Label>
                        <Input type="select" name="extraDotColor" value={this.props.saccadesReducer.direction} onChange={this.onDirectionChange}>
                            <option value="TLtoBR">Top Left to Bottom Right</option>
                            <option value="TMtoBM">Top Middle to Bottom Middle</option>
                            <option value="TRtoBL">Top Right to Bottom Left</option>
                            <option value="MLtoMR">Middle Left to Middle Right</option>
                            <option value="MRtoML">Middle Right to Middle Left</option>
                            <option value="BLtoTR">Bottom Left to Top Right</option>
                            <option value="BMtoTM">Bottom Middle to Top Middle</option>
                            <option value="BRtoTL">Bottom Right to Top Left</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dotSpeed">Dot Speed: </Label>
                        <Input type="number" min="1" max="10" step="1" value={this.props.saccadesReducer.dotSpeed} onChange={this.onDotSpeedChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dotSpeed">Number of Steps: </Label>
                        <Input type="number" min="3" max="10" step="1" value={this.props.saccadesReducer.steps} onChange={this.onStepsChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dotNumber">Number of Cycles: </Label>
                        <Input type="select" value={this.props.saccadesReducer.cycles} onChange={this.onCyclesChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>Infinite</option>
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

export default connect((state) => (state))(SaccadesOptions);