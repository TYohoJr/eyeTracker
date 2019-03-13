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
                dotSpeed: data.pursuits[2],
                cycles: data.pursuits[3],
            });
        }
        if (cookie.get('data').saccades.length) {
            this.props.dispatch({
                type: "savedExerciseSaccades",
                direction: data.saccades[0],
                dotColor: data.saccades[1],
                dotSpeed: data.saccades[2],
                cycles: data.saccades[3],
                steps: data.saccades[4],
            });
        }
        if (cookie.get('data').combination.length) {
            this.props.dispatch({
                type: "savedExerciseCombination",
                dotColor: data.combination[0],
                masterArray: data.combination[1],
                exerciseTypeCheck: data.combination[2],
            });
        }
        if (cookie.get('data').randomSaccades.length) {
            this.props.dispatch({
                type: "savedExerciseRandomSaccades",
                centerDotColor: data.randomSaccades[0],
                extraDotColor: data.randomSaccades[1],
                dotSpeed: data.randomSaccades[2],
                dotNumber: data.randomSaccades[3],
            });
        }
        if (cookie.get('data').antiSaccades.length) {
            this.props.dispatch({
                type: "savedExerciseAntiSaccades",
                centerDotColor: data.antiSaccades[0],
                trueExtraDotColor: data.antiSaccades[1],
                dotSpeed: data.antiSaccades[2],
                cycles: data.antiSaccades[3],
                goNoGo: data.antiSaccades[4],
                goNoGoDotColor: data.antiSaccades[5],
            });
        }
        if (cookie.get('data').opk.length) {
            this.props.dispatch({
                type: "savedExerciseOPK",
                stripeColor: data.opk[0],
                backgroundColor: data.opk[1],
                scrollSpeed: data.opk[2],
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