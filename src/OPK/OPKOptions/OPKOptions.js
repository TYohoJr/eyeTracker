import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './OPKOptions.css';
import { connect } from 'react-redux';
import HomePage from "../../HomePage/HomePage.js";
import OPKExercise from "../OPKExercise/OPKExercise.js";

class OPKOptions extends Component {
    constructor() {
        super();
        this.onStripeColorChange = this.onStripeColorChange.bind(this);
        this.onBackgroundColorChange = this.onBackgroundColorChange.bind(this);
        this.onScrollSpeedhange = this.onScrollSpeedhange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.returnHome = this.returnHome.bind(this);
        this.resetOptions = this.resetOptions.bind(this);
    }

    onStripeColorChange(e) {
        this.props.dispatch({
            type: "changeOPKStripeColor",
            stripeColor: e.target.value
        })
    }

    onBackgroundColorChange(e) {
        this.props.dispatch({
            type: "changeOPKBackgroundColor",
            backgroundColor: e.target.value
        })
    }

    onScrollSpeedhange(e) {
        this.props.dispatch({
            type: "changeOPKScrollSpeed",
            scrollSpeed: e.target.value
        })
    }

    onRunButton(e) {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <OPKExercise />
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
                        <Label for="extraDotColor">Stripe 1 Color: </Label>
                        <Input type="select" name="extraDotColor" value={this.props.opkReducer.stripeColor} onChange={this.onStripeColorChange}>
                            <option>Red</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="extraDotColor">Stripe 2 Color: </Label>
                        <Input type="select" name="extraDotColor" value={this.props.opkReducer.backgroundColor} onChange={this.onBackgroundColorChange}>
                            <option>Red</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Blue</option>
                            <option>Green</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dotSpeed">Scroll Speed </Label>
                        <Input type="number" min="1" max="10" step=".5" value={this.props.opkReducer.scrollSpeed} onChange={this.onScrollSpeedhange} />
                    </FormGroup>
                    <Button onClick={this.onRunButton}>Run</Button>
                    <Button onClick={this.resetOptions}>Reset</Button>
                </Form>
                <Button onClick={this.returnHome}>Home</Button>
            </div >
        );
    }
}

export default connect((state) => (state))(OPKOptions);