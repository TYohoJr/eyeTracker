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
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
    }

    onAddListItem(e) {
        this.props.dispatch({
            type: "addListItem",
            exerciseType: document.getElementById("item-exercise-type").value,
            direction: document.getElementById("item-direction").value,
            dotSpeed: document.getElementById("item-dot-speed").value,
            dotSteps: document.getElementById("item-dot-steps").value,
        })
    }

    onDotColorChange(e) {
        this.props.dispatch({
            type: "changeCombinationDotColor",
            dotColor: e.target.value
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
            type: "resetCombination"
        })
    }

    render() {
        var masterList = this.props.combinationReducer.masterArray.map((item, i) => {
            return <tr>
                <td key={i}>{i + 1}</td>
                <td key={i}>{item["exerciseType"]}</td>
                <td key={i}>{item["direction"]}</td>
                <td key={i}>{item["dotSpeed"]}</td>
                <td key={i}>{item["dotSteps"]}</td>
            </tr>
        })
        return (
            <div>
                <div id="combination-div">
                    <Form id="options-form">
                        <FormGroup>
                            <Label for="extraDotColor">Dot Color: </Label>
                            <Input type="select" name="extraDotColor" value={this.props.combinationReducer.dotColor} onChange={this.onDotColorChange}>
                                <option>Red</option>
                                <option>White</option>
                                <option>Black</option>
                                <option>Blue</option>
                                <option>Green</option>
                            </Input>
                        </FormGroup>
                        <p id="add-step-p">Add Step to Exercise:</p>
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
                            <Input id="item-dot-speed" type="number" min="1" max="10" step=".5" defaultValue="1" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="dotSpeed">Number of Steps: </Label>
                            <Input id="item-dot-steps" type="number" min="3" max="8" step="1" defaultValue="3" />
                        </FormGroup>
                        <Button id="add-step-btn" onClick={this.onAddListItem}>Add Step</Button>
                        <br />
                        <Button onClick={this.onRunButton}>Run</Button>
                        <Button onClick={this.resetOptions}>Reset</Button>
                    </Form>
                    <Button onClick={this.returnHome}>Home</Button>
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