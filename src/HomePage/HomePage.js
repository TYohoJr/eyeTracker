import React, { Component } from 'react';
import './HomePage.css';
import { connect } from 'react-redux';
import RandomSaccadesOptions from "../RandomSaccades/RandomSaccadesOptions/RamdomSaccadesOptions.js";

class HomePage extends Component {
    constructor(){
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

    staticDots(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    pursuits(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    saccades(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    combination(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    randomSaccades(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    antisaccades(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    opk(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    hemistim(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    memorySaccades(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

    gazeStability(){
        this.props.dispatch({
            type:"changeCurrentPage",
            currentPage:<RandomSaccadesOptions />
        })
    }

  render() {
    return (
      <div>
        <div>
            <button onClick={this.staticDots}>Static Dots</button>
            <button onClick={this.pursuits}>Pursuits</button>
            <button onClick={this.saccades}>Saccades</button>
            <button onClick={this.combination}>Combination Saccades & Pursuits</button>
            <button onClick={this.randomSaccades}>Random Saccades</button>
            <button onClick={this.antisaccades}>Antisaccades</button>
            <button onClick={this.opk}>OPK</button>
            <button onClick={this.hemistim}>Hemistim</button>
            <button onClick={this.memorySaccades}>Memory Saccades</button>
            <button onClick={this.gazeStability}>Gaze Stability</button>
        </div>
      </div >
    );
  }
}

export default connect((state) => (state))(HomePage);