import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './SaccadesOptions.css';
import { connect } from 'react-redux';
import SaccadesExercise from '../SaccadesExercise/SaccadesExercise.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var saveButton;

class SaccadesOptions extends Component {
    constructor() {
        super();
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onDirectionChange = this.onDirectionChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onCyclesChange = this.onCyclesChange.bind(this);
        this.onStepsChange = this.onStepsChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
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
            currentPage: <SaccadesExercise />,
            hidden: true
        })
    }

    saveExerciseOptions() {
        if (cookie.get('username')) {
            let exercise = this.props.saccadesReducer;
            axios.post("/saveSaccadesExerciseOptions", {
                token: localStorage.getItem('token'),
                username: cookie.get('username'),
                direction: exercise.direction,
                dotColor: exercise.dotColor,
                dotSpeed: exercise.dotSpeed,
                cycles: exercise.cycles,
                steps: exercise.steps,
            }).then((result) => {
                alert(result.data.message)
            }).catch((error) => {
                alert(error)
            })
        }
    }

    componentWillMount() {
        if (cookie.get('username')) {
            saveButton = <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
        }
        if (cookie.get('data').saccades.length) {
            let data = cookie.get('data')
            this.props.dispatch({
                type: "savedExerciseSaccades",
                direction: data.saccades[0],
                dotColor: data.saccades[1],
                dotSpeed: data.saccades[2],
                cycles: data.saccades[3],
                steps: data.saccades[4],
            });
        }
    }

    render() {
        return (
            <div>
                <Form id="saccades-options-form" className="options-form">
                    <FormGroup>
                        <Label for="saccades-center-dot-color">Dot Color: </Label>
                        <Input type="select" name="saccades-center-dot-color" value={this.props.saccadesReducer.dotColor} onChange={this.onDotColorChange}>
                            <option>Black</option>
                            <option>Red</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Blue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="saccades-dot-movement">Dot Movement: </Label>
                        <Input type="select" name="saccades-dot-movement" value={this.props.saccadesReducer.direction} onChange={this.onDirectionChange}>
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
                        <Label for="saccades-dot-speed">Dot Speed: </Label>
                        <Input type="number" name="saccades-dot-speed" min="1" max="10" step="1" value={this.props.saccadesReducer.dotSpeed} onChange={this.onDotSpeedChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="saccades-steps">Number of Steps: </Label>
                        <Input type="number" name="saccades-steps" min="3" max="10" step="1" value={this.props.saccadesReducer.steps} onChange={this.onStepsChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="saccades-cycles">Number of Cycles: </Label>
                        <Input type="select" name="saccades-cycles" value={this.props.saccadesReducer.cycles} onChange={this.onCyclesChange}>
                            <option>1</option>
                            <option>5</option>
                            <option>10</option>
                            <option>15</option>
                            <option>20</option>
                            <option>Infinite</option>
                        </Input>
                    </FormGroup>
                    <div>
                        {saveButton}
                    </div>
                    <Button color="success" onClick={this.onRunButton}>Run</Button>
                </Form>
            </div >
        );
    }
}

export default connect((state) => (state))(SaccadesOptions);