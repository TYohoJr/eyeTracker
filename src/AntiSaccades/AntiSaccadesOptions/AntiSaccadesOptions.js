import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './AntiSaccadesOptions.css';
import { connect } from 'react-redux';
import AntiSaccadesExercise from '../AntiSaccadesExercise/AntiSaccadesExercise.js';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var goNoGoTest;
var saveButton;

class AntiSaccadesOptions extends Component {
    constructor() {
        super();
        this.onCenterDotColorChange = this.onCenterDotColorChange.bind(this);
        this.onExtraDotColorChange = this.onExtraDotColorChange.bind(this);
        this.onCyclesChange = this.onCyclesChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.onGoNoGoChange = this.onGoNoGoChange.bind(this);
        this.onGoNoGoDotColorChange = this.onGoNoGoDotColorChange.bind(this);
        this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
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

    onRunButton() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <AntiSaccadesExercise />,
            hidden: true
        })
    }

    saveExerciseOptions() {
        if (cookie.get('username')) {
            let exercise = this.props.antiSaccadesReducer;
            axios.post("/saveAntiSaccadesExerciseOptions", {
                token: localStorage.getItem('token'),
                username: cookie.get('username'),
                centerDotColor: exercise.centerDotColor,
                trueExtraDotColor: exercise.extraDotColor,
                extraDotColor: exercise.extraDotColor,
                dotSpeed: exercise.dotSpeed,
                cycles: exercise.cycles,
                goNoGo: exercise.goNoGo,
                goNoGoDotColor: exercise.goNoGoDotColor,
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
        if (cookie.get('data').antiSaccades.length) {
            let data = cookie.get('data')
            this.props.dispatch({
                type: "savedExerciseAntiSaccades",
                centerDotColor: data.antiSaccades[0],
                trueExtraDotColor: data.antiSaccades[1],
                extraDotColor: data.antiSaccades[2],
                dotSpeed: data.antiSaccades[3],
                cycles: data.antiSaccades[4],
                goNoGo: data.antiSaccades[5],
                goNoGoDotColor: data.antiSaccades[6],
            });
        }
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
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Blue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="anti-saccades-extra-dot-color">Extra Dots Color: </Label>
                        <Input type="select" name="anti-saccades-extra-dot-color" value={this.props.antiSaccadesReducer.extraDotColor} onChange={this.onExtraDotColorChange}>
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
                    <div>
                        {saveButton}
                    </div>
                    <Button color="success" onClick={this.onRunButton}>Run</Button>
                </Form>
            </div >
        );
    }
}

export default connect((state) => (state))(AntiSaccadesOptions);