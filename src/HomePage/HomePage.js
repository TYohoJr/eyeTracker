import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import RandomSaccadesOptions from "../RandomSaccades/RandomSaccadesOptions/RamdomSaccadesOptions.js";
import StaticDotsOptions from '../StaticDots/StaticDotsOptions/StaticDotsOptions';
import OPKOptions from '../OPK/OPKOptions/OPKOptions';
import PursuitsOptions from '../Pursuits/PursuitsOptions/PursuitsOptions';

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
        this.hemistim = this.hemistim.bind(this);
        this.memorySaccades = this.memorySaccades.bind(this);
        this.gazeStability = this.gazeStability.bind(this);
    }

    // componentDidMount() {
    //     this.props.dispatch({
    //         type: "resetAll"
    //     })
    // }

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
            currentPage: <RandomSaccadesOptions />
        })
    }

    combination() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
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
            currentPage: <RandomSaccadesOptions />
        })
    }

    opk() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <OPKOptions />
        })
    }

    hemistim() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
        })
    }

    memorySaccades() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
        })
    }

    gazeStability() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <RandomSaccadesOptions />
        })
    }

    render() {
        return (
            <div>
                <div id="all-btns-container">
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.staticDots}><img className="preview-thumbnail" src={require("../project-images/static-dots.png")} alt="rs" /><br />Static Dots</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.pursuits}><img className="preview-thumbnail" src={require("../project-images/pursuits.png")} alt="rs" /><br />Pursuits</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.saccades}><img className="preview-thumbnail" src={require("../project-images/saccades.png")} alt="rs" /><br />Saccades</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.combination}><img className="preview-thumbnail" src={require("../project-images/combination.png")} alt="rs" /><br />Combination Saccades & Pursuits</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.randomSaccades}><img className="preview-thumbnail" src={require("../project-images/random-saccades.png")} alt="rs" /><br />Random Saccades</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.antisaccades}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Antisaccades</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.opk}><img className="preview-thumbnail" src={require("../project-images/opk.png")} alt="rs" /><br />OPK</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.hemistim}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Hemistim</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.memorySaccades}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Memory Saccades</button>
                    </div>
                    <div className="btn-div">
                        <button className="homepage-btn" onClick={this.gazeStability}><img className="preview-thumbnail" src={require("../project-images/placeholder.png")} alt="rs" /><br />Gaze Stability</button>
                    </div>
                </div>
            </div >
        );
    }
}

export default connect((state) => (state))(HomePage);