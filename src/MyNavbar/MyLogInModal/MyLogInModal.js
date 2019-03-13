import React from 'react';
import './MyLogInModal.css';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Input } from 'reactstrap';
import { connect } from 'react-redux';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookie = new Cookies();

class MyLogInModal extends React.Component {
    constructor(props) {
        super(props);
        this.logInUser = this.logInUser.bind(this);
        this.toggle = this.toggle.bind(this);
        this.onLogInPasswordChange = this.onLogInPasswordChange.bind(this);
        this.onLogInUsernameChange = this.onLogInUsernameChange.bind(this);
        this.onShowPasswordChange = this.onShowPasswordChange.bind(this);
        this.loadSavedExercises = this.loadSavedExercises.bind(this);
        this.state = {
            modal: false
        };
    }

    toggle() {
        if (this.state.modal === false) {
            this.props.dispatch({
                type: "resetLogInData",
            })
        }
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    logInUser() {
        return new Promise((resolve, reject) => {
            axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
                if (result.data.message === "Login successful!") {
                    localStorage.setItem('token', result.data.myToken);
                    console.log(result);
                    cookie.set('username', result.data.user.username);
                    cookie.set('data', result.data.user);
                    this.props.dispatch({
                        type: "changeLogInStatus",
                        accountUsername: result.data.user.username,
                        logInGreeting: result.data.user.username
                    });
                    this.toggle()
                    resolve();
                    // window.location.reload();
                } else {
                    alert(result.data.message);
                    reject();
                }
            }).then(() => {
                this.loadSavedExercises();
            })
        })
        // axios.post("/userLogIn", { username: this.props.logInReducer.logInUsername, password: this.props.logInReducer.logInPassword }).then((result) => {
        //     if (result.data.message === "Login successful!") {
        //         localStorage.setItem('token', result.data.myToken);
        //         console.log(result);
        //         cookie.set('username', result.data.user.username);
        //         cookie.set('data', result.data.user);
        //         this.props.dispatch({
        //             type: "changeLogInStatus",
        //             accountUsername: result.data.user.username,
        //             logInGreeting: result.data.user.username
        //         });
        //         this.toggle()
        //         // window.location.reload();
        //     } else {
        //         alert(result.data.message)
        //     }
        // })
        // this.loadSavedExercises();
    }

    loadSavedExercises() {
        let data = cookie.get('data')
        if (cookie.get('data').staticDots.length) {
            this.props.dispatch({
                type: "savedExerciseStaticDots",
                centerDotColor: data.staticDots[0],
                extraDotColor: data.staticDots[1],
            });
        }
        if (cookie.get('data').pursuits.length) {
            this.props.dispatch({
                type: "savedExercisePursuits",
                direction: data.pursuits[0],
                dotColor: data.pursuits[1],
                dotSpeed: data.dotSpeed[2],
                cycles: data.cycles[3],
            });
        }
        if (cookie.get('data').saccades.length) {
            this.props.dispatch({
                type: "savedExerciseSaccades",
                direction: data.pursuits[0],
                dotColor: data.pursuits[1],
                dotSpeed: data.dotSpeed[2],
                cycles: data.cycles[3],
                steps: data.steps[4],
            });
        }
        if (cookie.get('data').combination.length) {
            this.props.dispatch({
                type: "savedExerciseCombination",
                dotColor: data.dotColor[0],
                masterArray: data.masterArray[1],
                exerciseTypeCheck: data.exerciseTypeCheck[2],
            });
        }
        if (cookie.get('data').randomSaccades.length) {
            this.props.dispatch({
                type: "savedExerciseRandomSaccades",
                centerDotColor: data.centerDotColor[0],
                extraDotColor: data.extraDotColor[1],
                dotSpeed: data.dotSpeed[2],
                dotNumber: data.dotNumber[3],
            });
        }
        if (cookie.get('data').antiSaccades.length) {
            this.props.dispatch({
                type: "savedExerciseAntiSaccades",
                centerDotColor: data.centerDotColor[0],
                trueExtraDotColor: data.trueExtraDotColor[1],
                dotSpeed: data.dotSpeed[2],
                cycles: data.cycles[3],
                goNoGo: data.goNoGo[4],
                goNoGoDotColor: data.goNoGoDotColor[5],
            });
        }
        if (cookie.get('data').opk.length) {
            this.props.dispatch({
                type: "savedExerciseOPK",
                stripeColor: data.stripeColor[0],
                backgroundColor: data.backgroundColor[1],
                scrollSpeed: data.scrollSpeed[2],
            });
        }
    }

    onLogInPasswordChange(e) {
        this.props.dispatch({
            type: "changeLogInPassword",
            logInPassword: e.target.value
        })
    }

    onLogInUsernameChange(e) {
        this.props.dispatch({
            type: "changeLogInUsername",
            logInUsername: e.target.value
        })
    }

    onShowPasswordChange() {
        if (this.props.logInReducer.showPassword === "password") {
            this.props.dispatch({
                type: "changeLogInShowPassword",
                showPassword: "text"
            })
        } else if (this.props.logInReducer.showPassword === "text") {
            this.props.dispatch({
                type: "changeLogInShowPassword",
                showPassword: "password"
            })
        }
    }

    render() {
        return (
            <div>
                <Button onClick={this.toggle}>Log In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Log In</ModalHeader>
                    <ModalBody>
                        <div>
                            <p>Username</p>
                            <Input type="text" value={this.props.logInReducer.logInUsername} onChange={this.onLogInUsernameChange} />
                            <p>Password</p>
                            <Input type={this.props.logInReducer.showPassword} value={this.props.logInReducer.logInPassword} onChange={this.onLogInPasswordChange} />
                            <small><input type="checkbox" onChange={this.onShowPasswordChange} />Show Password</small>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" color="success" onClick={this.logInUser}>Log In</Button>{' '}
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default connect((state) => (state))(MyLogInModal);