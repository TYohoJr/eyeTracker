import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './CombinationOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import CombinationExercise from '../CombinationExercise/CombinationExercise';

class CombinationOptions extends Component {
    constructor() {
        super();
        this.onAddListItem = this.onAddListItem.bind(this);
        this.onStartingLocationChange = this.onStartingLocationChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
    }

    onAddListItem(e) {
        debugger
        this.props.dispatch({
            type: "addListItem",
            exerciseType: document.getElementById("item-exercise-type").value,
            direction: document.getElementById("item-direction").value,
            dotSpeed: document.getElementById("item-dot-speed").value,
            dotSteps: document.getElementById("item-dot-steps").value,
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

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <CombinationExercise />
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
            type: "resetOPK"
        })
    }

    render() {
        // debugger
        var exerciseTypeList = this.props.combinationReducer.exerciseType.map((item, i) => {
            return <tr key={i}><td>{item}</td></tr>
        });
        var directionList = this.props.combinationReducer.direction.map((item, i) => {
            return <tr key={i}><td>{item}</td></tr>
        });
        var dotSpeedList = this.props.combinationReducer.dotSpeed.map((item, i) => {
            return <tr key={i}><td>{item}</td></tr>
        });
        var dotStepsList = this.props.combinationReducer.dotSteps.map((item, i) => {
            return <tr key={i}><td>{item}</td></tr>
        });


        return (
            <div>
                <Form id="options-form">
                    <FormGroup>
                        <Label for="extraDotColor">Exercise Type: </Label>
                        <Input id="item-exercise-type" type="select">
                            <option>Saccades</option>
                            <option>Pursuit</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="extraDotColor">Dot Movement: </Label>
                        <Input id="item-direction" type="select" name="extraDotColor">
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
                        <Input id="item-dot-speed" type="number" min="1" max="10" step=".5" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="dotSpeed">Number of Steps: </Label>
                        <Input id="item-dot-steps" type="number" min="3" max="8" step="1" />
                    </FormGroup>
                    <Button onClick={this.onAddListItem}>Add</Button>
                    <Button onClick={this.onRunButton}>Run</Button>
                    <Button onClick={this.resetOptions}>Reset</Button>
                </Form>
                <Button onClick={this.returnHome}>Home</Button>
                <table id="combination-table" border="1">
                    <thead>
                        <tr>
                            <th>Exercise Type</th>
                            <th>Direction</th>
                            <th>Dot Speed</th>
                            <th>Dot Steps</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exerciseTypeList}
                        {directionList}
                        {dotSpeedList}
                        {dotStepsList}
                    </tbody>
                </table>
            </div >
        );
    }
}

export default connect((state) => (state))(CombinationOptions);