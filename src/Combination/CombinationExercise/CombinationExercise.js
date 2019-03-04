import React, { Component } from 'react';
import './CombinationExercise.css';
import { connect } from 'react-redux';
import CombinationOptions from '../CombinationOptions/CombinationOptions';

class CombinationExercise extends Component {
    constructor() {
        super();
        this.endExercise = this.endExercise.bind(this);
    }

    endExercise() {
        this.props.dispatch({
            type: "changeCurrentPage",
            currentPage: <CombinationOptions />
        })
    }

    render() {
        var currentArray = this.props.combinationReducer.masterArray
        var topValue;
        var leftValue;
        var saccadesDisplay = "inline-block";
        var pursuitsDisplay = "inline-block";
        var steps;
        var dotSpeed;
        var animationName;
        var animationDuration;


        if (currentArray[0]) {
            if (currentArray[0].exerciseType === "Saccades") {
                pursuitsDisplay = "none";
                saccadesDisplay = "inline-block";
            } else if (currentArray[0].exerciseType === "Pursuit") {
                saccadesDisplay = "none";
                pursuitsDisplay = "inline-block";
            }
            steps = currentArray[0].dotSteps;
            dotSpeed = 10 - currentArray[0].dotSpeed;
            animationName = currentArray[0].direction;
            animationDuration = 10.5 - currentArray[0].dotSpeed;
            switch (currentArray[0].direction) {
                case "TLtoBR":
                    topValue = 5;
                    leftValue = 5;
                    break;
                case "TMtoBM":
                    topValue = 5;
                    leftValue = 50;
                    break;
                case "TRtoBL":
                    topValue = 5;
                    leftValue = 95;
                    break;
                case "MLtoMR":
                    topValue = 50;
                    leftValue = 5;
                    break;
                case "MRtoML":
                    topValue = 50;
                    leftValue = 95;
                    break;
                case "BLtoTR":
                    topValue = 95;
                    leftValue = 5;
                    break;
                case "BMtoTM":
                    topValue = 95;
                    leftValue = 50;
                    break;
                case "BRtoTL":
                    topValue = 95;
                    leftValue = 95;
                    break;
                default:
                    topValue = 50;
                    leftValue = 50;
            }
            
            setTimeout(function(){
                debugger
                if (currentArray[1]) {
                    if (currentArray[1].exerciseType === "Saccades") {
                        pursuitsDisplay = "none";
                        saccadesDisplay = "inline-block";
                    } else if (currentArray[1].exerciseType === "Pursuit") {
                        saccadesDisplay = "none";
                        pursuitsDisplay = "inline-block";
                    }
                    steps = currentArray[1].dotSteps;
                    dotSpeed = 10 - currentArray[1].dotSpeed;
                    animationName = currentArray[1].direction;
                    animationDuration = 10.5 - currentArray[1].dotSpeed;
                    switch (currentArray[1].direction) {
                        case "TLtoBR":
                            topValue = 5;
                            leftValue = 5;
                            break;
                        case "TMtoBM":
                            topValue = 5;
                            leftValue = 50;
                            break;
                        case "TRtoBL":
                            topValue = 5;
                            leftValue = 95;
                            break;
                        case "MLtoMR":
                            topValue = 50;
                            leftValue = 5;
                            break;
                        case "MRtoML":
                            topValue = 50;
                            leftValue = 95;
                            break;
                        case "BLtoTR":
                            topValue = 95;
                            leftValue = 5;
                            break;
                        case "BMtoTM":
                            topValue = 95;
                            leftValue = 50;
                            break;
                        case "BRtoTL":
                            topValue = 95;
                            leftValue = 95;
                            break;
                        default:
                            topValue = 50;
                            leftValue = 50;
                    }
                    setTimeout(function(){
        
                    }, 2000)
                }
            }, 2000)
        }


        // for (var i = 0; i < currentArray.length; i++) {
        //     console.log(currentArray[i])
        //     if (currentArray[i].exerciseType === "Saccades") {
        //         pursuitsDisplay = "none";
        //         saccadesDisplay = "inline-block";
        //     } else if (currentArray[i].exerciseType === "Pursuit") {
        //         saccadesDisplay = "none";
        //         pursuitsDisplay = "inline-block";
        //     }
        //     steps = currentArray[i].dotSteps;
        //     dotSpeed = 10 - currentArray[i].dotSpeed;
        //     animationName = currentArray[i].direction;
        //     animationDuration = 10.5 - currentArray[i].dotSpeed;
        //     switch (currentArray[i].direction) {
        //         case "TLtoBR":
        //             topValue = 5;
        //             leftValue = 5;
        //             break;
        //         case "TMtoBM":
        //             topValue = 5;
        //             leftValue = 50;
        //             break;
        //         case "TRtoBL":
        //             topValue = 5;
        //             leftValue = 95;
        //             break;
        //         case "MLtoMR":
        //             topValue = 50;
        //             leftValue = 5;
        //             break;
        //         case "MRtoML":
        //             topValue = 50;
        //             leftValue = 95;
        //             break;
        //         case "BLtoTR":
        //             topValue = 95;
        //             leftValue = 5;
        //             break;
        //         case "BMtoTM":
        //             topValue = 95;
        //             leftValue = 50;
        //             break;
        //         case "BRtoTL":
        //             topValue = 95;
        //             leftValue = 95;
        //             break;
        //         default:
        //             topValue = 50;
        //             leftValue = 50;
        //     }
        // }
        return (
            <div>
                <span id="pursuits-dot" style={{
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "display": `${pursuitsDisplay}`,
                    "top": `${topValue}%`,
                    "left": `${leftValue}%`,
                    "animationName": `${animationName}`,
                    
                    "animationDuration": `${animationDuration}s`,
                }} />
                <span id="saccades-dot" style={{
                    "height": "30px",
                    "width": "30px",
                    "borderRadius": "50%",
                    "backgroundColor": this.props.combinationReducer.dotColor,
                    "display": `${saccadesDisplay}`,
                    "position": "fixed",
                    "top": `${topValue}%`,
                    "left": `${leftValue}%`,
                    "animation": `${animationName} ${dotSpeed}s steps(${steps}) ${.5}s`,
                    "animationFillMode": "both",
                }} />
                <button onClick={this.endExercise} className="done-button">Done</button>
            </div>
        );
    }
}

export default connect((state) => (state))(CombinationExercise);