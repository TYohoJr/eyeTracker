import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './PursuitsOptions.css';
import { connect } from 'react-redux';
import PursuitsExercise from "../PursuitsExercise/PursuitsExercise.js";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var saveButton;

class PursuitsOptions extends Component {
    constructor() {
        super();
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onStartingLocationChange = this.onStartingLocationChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.onCyclesChange = this.onCyclesChange.bind(this);
        this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
    }

    onDotColorChange(e) {
        this.props.dispatch({
            type: "changePursuitsDotColor",
            dotColor: e.target.value
        })
    }

    onStartingLocationChange(e) {
        this.props.dispatch({
            type: "changePursuitsStartingLocation",
            startingLocation: e.target.value
        })
    }

    onDotSpeedChange(e) {
        this.props.dispatch({
            type: "changePursuitsDotSpeed",
            dotSpeed: e.target.value
        })
    }

    onCyclesChange(e) {
        this.props.dispatch({
            type: "changePursuitsCycles",
            cycles: e.target.value
        })
    }

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <PursuitsExercise />,
            hidden: true
        })
    }

    saveExerciseOptions() {
        if (cookie.get('username')) {
            let exercise = this.props.staticDotsReducer;
            axios.post("/saveStaticDotsExerciseOptions", {
                token: localStorage.getItem('token'),
                username: cookie.get('username'),
                centerDotColor: exercise.centerDotColor,
                extraDotColor: exercise.extraDotColor,
            }).then((result) => {
                if (result.data.message === "Exercise saved successfully") {
                    cookie.set('staticDots', result.data.user.staticDots)
                } else {
                    alert(result.data.message)
                }
            })
        }
    }

    componentWillMount() {
        if (cookie.get('username')) {
            saveButton = <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
        }
    }

    render() {
        return (
            <div>
                <Form id="pursuits-options-form" className="options-form">
                    <FormGroup>
                        <Label for="pursuits-dot-color">Dot Color: </Label>
                        <Input type="select" name="pursuits-dot-color" value={this.props.pursuitsReducer.dotColor} onChange={this.onDotColorChange}>
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
                        <Label for="pursuits-dot-movement">Dot Movement: </Label>
                        <Input type="select" name="pursuits-dot-movement" value={this.props.pursuitsReducer.startingLocation} onChange={this.onStartingLocationChange}>
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
                        <Label for="pursuits-scroll-speed">Scroll Speed: </Label>
                        <Input type="number" name="pursuits-scroll-speed" min="1" max="10" step=".5" value={this.props.pursuitsReducer.dotSpeed} onChange={this.onDotSpeedChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="pursuits-dot-color">Cycles: </Label>
                        <Input type="select" name="pursuits-dot-color" value={this.props.pursuitsReducer.cycles} onChange={this.onCyclesChange}>
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
                    <Button onClick={this.onRunButton}>Run</Button>
                </Form>
            </div >
        );
    }
}

export default connect((state) => (state))(PursuitsOptions);