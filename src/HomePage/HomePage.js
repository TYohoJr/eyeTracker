import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import axios from 'axios';
import RandomSaccadesOptions from "../RandomSaccades/RandomSaccadesOptions/RandomSaccadesOptions.js";
import StaticDotsOptions from '../StaticDots/StaticDotsOptions/StaticDotsOptions.js';
import OPKOptions from '../OPK/OPKOptions/OPKOptions.js';
import PursuitsOptions from '../Pursuits/PursuitsOptions/PursuitsOptions.js';
import SaccadesOptions from '../Saccades/SaccadesOptions/SaccadesOptions.js';
import CombinationOptions from '../Combination/CombinationOptions/CombinationOptions.js';
import AntiSaccadesOptions from '../AntiSaccades/AntiSaccadesOptions/AntiSaccadesOptions.js';

class HomePage extends Component {
    constructor() {
        super();
        this.staticDots = this.staticDots.bind(this);
        this.pursuits = this.pursuits.bind(this);
        this.saccades = this.saccades.bind(this);
        this.combination = this.combination.bind(this);
        this.randomSaccades = this.randomSaccades.bind(this);
        this.antisaccades = this.antisaccades.bind(this);
        this.opk = this.opk.bind(this);
        this.signUpUser = this.signUpUser.bind(this);
        // this.hemistim = this.hemistim.bind(this);
        // this.memorySaccades = this.memorySaccades.bind(this);
        // this.gazeStability = this.gazeStability.bind(this);
    }

    staticDots() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <StaticDotsOptions />
        })
    }

    pursuits() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <PursuitsOptions />
        })
    }

    saccades() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <SaccadesOptions />
        })
    }

    combination() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <CombinationOptions />
        })
    }

    randomSaccades() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
        })
    }

    antisaccades() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <AntiSaccadesOptions />
        })
    }

    opk() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <OPKOptions />
        })
    }

    signUpUser() {
        axios.post("/signUpData", { username: "TestUser", password: "SecretPassword" }).then((result) => {
            if (result.data === "Sign Up Successful") {
                console.log(result.data)
            } else {
                alert(result.data)
            }
        })
    }

    // hemistim() {
    //     this.props.dispatch({
    //         type: "changeCurrentPage",
    //         currentPage: <RandomSaccadesOptions />
    //     })
    // }

    // memorySaccades() {
    //     this.props.dispatch({
    //         type: "changeCurrentPage",
    //         currentPage: <RandomSaccadesOptions />
    //     })
    // }

    // gazeStability() {
    //     this.props.dispatch({
    //         type: "changeCurrentPage",
    //         currentPage: <RandomSaccadesOptions />
    //     })
    // }

    render() {
        return (
            <div>
                <div id="homepage-all-btns-div">
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.staticDots}><img className="preview-thumbnail" src={require("../project-images/static-dots.png")} alt="exercise preview" /><br />Static Dots</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.pursuits}><img className="preview-thumbnail" src={require("../project-images/pursuits.png")} alt="exercise preview" /><br />Pursuits</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.saccades}><img className="preview-thumbnail" src={require("../project-images/saccades.png")} alt="exercise preview" /><br />Saccades</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.combination}><img className="preview-thumbnail" src={require("../project-images/combination.png")} alt="exercise preview" /><br />Combination Saccades & Pursuits</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.randomSaccades}><img className="preview-thumbnail" src={require("../project-images/random-saccades.png")} alt="exercise preview" /><br />Random Saccades</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.antisaccades}><img className="preview-thumbnail" src={require("../project-images/anti-saccades.png")} alt="exercise preview" /><br />Antisaccades</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.opk}><img className="preview-thumbnail" src={require("../project-images/opk.png")} alt="exercise preview" /><br />OPK</button>
                    </div>
                    {/* <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.hemistim}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Hemistim</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.memorySaccades}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Memory Saccades</button>
                    </div>
                    <div className="homepage-btn-div">
                        <button className="homepage-btn" onClick={this.gazeStability}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Gaze Stability</button>
                    </div> */}
                </div>
                <button onClick={this.signUpUser}>Test User</button>
                <footer>© 2019 Thomas Yoho</footer>
            </div >
        );
    }
}

export default connect((state) => (state))(HomePage);