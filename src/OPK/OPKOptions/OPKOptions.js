import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import './OPKOptions.css';
import { connect } from 'react-redux';
import OPKExercise from "../OPKExercise/OPKExercise.js";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();
var saveButton;

class OPKOptions extends Component {
    constructor() {
        super();
        this.onStripeColorChange = this.onStripeColorChange.bind(this);
        this.onBackgroundColorChange = this.onBackgroundColorChange.bind(this);
        this.onScrollSpeedhange = this.onScrollSpeedhange.bind(this);
        this.onRunButton = this.onRunButton.bind(this);
        this.saveExerciseOptions = this.saveExerciseOptions.bind(this);
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
            currentPage: <OPKExercise />,
            hidden: true
        })
    }

    saveExerciseOptions() {
        if (cookie.get('username')) {
            let exercise = this.props.opkReducer;
            axios.post("/saveOPKExerciseOptions", {
                token: localStorage.getItem('token'),
                username: cookie.get('username'),
                stripeColor: exercise.stripeColor,
                backgroundColor: exercise.backgroundColor,
                scrollSpeed: exercise.scrollSpeed,
            }).then((result) => {
                cookie.set('data', result.data.user)
                alert(result.data.message)
            }).catch((error) => {
                alert(error)
            })
        }
    }

    componentWillMount() {
        if (cookie.get('username')) {
            saveButton = <Button color="muted" className="save-options-btn" onClick={this.saveExerciseOptions}>Save Options</Button>
            if (cookie.get('data')) {
                let data = cookie.get('data')
                this.props.dispatch({
                    type: "savedExerciseOPK",
                    stripeColor: data.opk[0],
                    backgroundColor: data.opk[1],
                    scrollSpeed: data.opk[2],
                });
            }
        }
    }

    render() {
        return (
            <div>
                <Form id="opk-options-form" className="options-form">
                    <FormGroup>
                        <Label for="opk-stripe-1-color">Stripe 1 Color: </Label>
                        <Input type="select" name="opk-stripe-1-color" value={this.props.opkReducer.stripeColor} onChange={this.onStripeColorChange}>
                            <option>Red</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Blue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="opk-stripe-2-color">Stripe 2 Color: </Label>
                        <Input type="select" name="opk-stripe-2-color" value={this.props.opkReducer.backgroundColor} onChange={this.onBackgroundColorChange}>
                            <option>Red</option>
                            <option>White</option>
                            <option>Black</option>
                            <option>Green</option>
                            <option>Yellow</option>
                            <option>Orange</option>
                            <option>Purple</option>
                            <option>Blue</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="opk-scroll-speed">Scroll Speed </Label>
                        <Input type="number" name="opk-scroll-speed" min="1" max="10" step=".5" value={this.props.opkReducer.scrollSpeed} onChange={this.onScrollSpeedhange} />
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

export default connect((state) => (state))(OPKOptions);