import React, { Component } from 'react';
import './RandomDot.css';
import { connect } from 'react-redux';
import RandomSaccadesOptions from "../RandomSaccadesOptions/RamdomSaccadesOptions";

var counter = 0;

class RandomDot extends Component {
    componentDidMount() {
        console.log(this.props.randomSaccadesOptionsReducer.dotSpeed)
        this.timerID = setInterval(() => {
            if (counter === this.props.randomSaccadesOptionsReducer.dotNumber) {
                counter = 1;
                this.props.dispatch({
                    type: "changeCurrentPage",
                    currentPage: <RandomSaccadesOptions />
                })
                clearInterval(this.timerID);
            } else {
                this.props.dispatch({
                    type: "changeDotLocation",
                    topPercent: Math.floor(Math.random() * 89),
                    leftPercent: Math.floor(Math.random() * 89),
                })
                counter++;
            }
            console.log(this.props.dotPlacementReducer.topPercent)
        }, this.props.randomSaccadesOptionsReducer.dotSpeed * 1000)
    }

    render() {
        return (
            <div>
                <span id="RandomDot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.randomSaccadesOptionsReducer.extraDotColor,
                    "display": "inline-block",
                    "position": "fixed",
                    "top": this.props.dotPlacementReducer.topPercent,
                    "left": this.props.dotPlacementReducer.leftPercent,
                }} />
            </div >
        );
    }
}

export default connect((state) => (state))(RandomDot);