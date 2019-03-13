import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './CombinationOptions.css';
import { connect } from 'react-redux';
import CombinationExercise from '../CombinationExercise/CombinationExercise';

var combinationHiddenCheck;

class CombinationOptions extends Component {
    constructor() {
        super();
        this.onAddListItem = this.onAddListItem.bind(this);
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.onExerciseTypeChange = this.onExerciseTypeChange.bind(this);
    }

    onAddListItem(e) {
        // Error handling stuff
        if (this.props.combinationReducer.masterArray.length === 2) {
            return alert("Maximum of 2 steps");
        }
        if (this.props.combinationReducer.masterArray.length) {
            if (this.props.combinationReducer.masterArray[0].exerciseType === document.getElementById("combination-exercise-type").value) {
                return alert("Please use 1 Pursuits and 1 Saccades exercise")
            }
        }
        //
        let combinationSteps = document.getElementById("combination-dot-steps").value;
        if (this.props.combinationReducer.exerciseTypeCheck === "Pursuits") {
            combinationSteps = "N/A"
        }
        this.props.dispatch({
            type: "addListItem",
            exerciseType: document.getElementById("combination-exercise-type").value,
            direction: document.getElementById("combination-dot-movement").value,
            dotSpeed: document.getElementById("combination-dot-speed").value,
            dotSteps: combinationSteps,
        })
    }

    onDotColorChange(e) {
        this.props.dispatch({
            type: "changeCombinationDotColor",
            dotColor: e.target.value
        })
    }

    onExerciseTypeChange(e) {
        this.props.dispatch({
            type: "changeCombinationExerciseType",
            exerciseType: e.target.value
        })
    }

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <CombinationExercise />,
            hidden: true
        })
    }

    render() {
        if (this.props.combinationReducer.exerciseTypeCheck === "Saccades") {
            combinationHiddenCheck = false
        } else {
            combinationHiddenCheck = true
        }
        var masterList = this.props.combinationReducer.masterArray.map((item, i) => {
            return <tr key={i}>
                <td key={`${i}list-number`}>{i + 1}</td>
                <td key={`${i}exercise-type`}>{item["exerciseType"]}</td>
                <td key={`${i}direction`}>{item["direction"]}</td>
                <td key={`${i}dot-speed`}>{item["dotSpeed"]}</td>
                <td key={`${i}dot-steps`}>{item["dotSteps"]}</td>
            </tr>
        })
        return (
            <div>
                <div id="combination-div">
                    <Form id="combination-options-form" className="options-form">
                        <FormGroup>
                            <Label for="combination-dot-color">Dot Color: </Label>
                            <Input type="select" name="combination-dot-color" value={this.props.combinationReducer.dotColor} onChange={this.onDotColorChange}>
                                <option>Black</option>
                                <option>Red</option>
                                <option>Green</option>
                                <option>Yellow</option>
                                <option>Orange</option>
                                <option>Purple</option>
                                <option>Blue</option>
                            </Input>
                        </FormGroup>
                        <p id="add-step-p">Add Step to Exercise:</p>
                        <FormGroup>
                            <Label for="combination-exercise-type">Exercise Type: </Label>
                            <Input id="combination-exercise-type" type="select" name="combination-exercise-type" value={this.props.combinationReducer.exerciseTypeCheck} onChange={this.onExerciseTypeChange}>
                                <option>Pursuits</option>
                                <option>Saccades</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label for="combintion-dot-movement">Dot Movement: </Label>
                            <Input id="combination-dot-movement" type="select" name="combination-dot-movement">
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
                            <Label for="combination-dot-speed">Dot Speed: </Label>
                            <Input id="combination-dot-speed" type="number" name="combination-dot-speed" min="1" max="10" step=".5" defaultValue="1" />
                        </FormGroup>
                        <FormGroup hidden={combinationHiddenCheck}>
                            <Label for="combination-dot-steps">Number of Steps: </Label>
                            <Input id="combination-dot-steps" type="number" name="combination-dot-steps" min="3" max="8" step="1" defaultValue="3" />
                        </FormGroup>
                        <Button id="combination-add-step-btn" onClick={this.onAddListItem}>Add Step</Button>
                        <br />
                        <Button onClick={this.onRunButton}>Run</Button>
                    </Form>
                </div>
                <div id="combination-div">
                    <table id="combination-table" border="1">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Exercise Type</th>
                                <th>Direction</th>
                                <th>Dot Speed</th>
                                <th>Dot Steps</th>
                            </tr>
                        </thead>
                        <tbody>
                            {masterList}
                        </tbody>
                    </table>
                </div >
            </div>
        );
    }
}

export default connect((state) => (state))(CombinationOptions);