import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './PursuitsOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import PursuitsExercise from "../PursuitsExercise/PursuitsExercise.js";

class PursuitsOptions extends Component {
    constructor() {
        super();
        this.onDotColorChange = this.onDotColorChange.bind(this);
        this.onStartingLocationChange = this.onStartingLocationChange.bind(this);
        this.onDotSpeedChange = this.onDotSpeedChange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
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

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <PursuitsExercise />
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
        return (
            <div>
                <Form id="options-form">
                    <FormGroup>
                        <Label for="extraDotColor">Dot Color: </Label>
                        <Input type="select" name="extraDotColor" value={this.props.pursuitsReducer.dotColor} onChange={this.onDotColorChange}>
                            <option>Red</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="extraDotColor">Dot Movement: </Label>
                        <Input type="select" name="extraDotColor" value={this.props.pursuitsReducer.startingLocation} onChange={this.onStartingLocationChange}>
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
                        <Label for="dotSpeed">Scroll Speed: </Label>
                        <Input type="number" min="1" max="10" step=".5" value={this.props.pursuitsReducer.dotSpeed} onChange={this.onDotSpeedChange} />
                    </FormGroup>
                    <Button onClick={this.onRunButton}>Run</Button>
                    <Button onClick={this.resetOptions}>Reset</Button>
                </Form>
                <Button onClick={this.returnHome}>Home</Button>
            </div >
        );
    }
}

export default connect((state) => (state))(PursuitsOptions);