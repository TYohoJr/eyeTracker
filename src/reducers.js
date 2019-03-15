import React from 'react';
import { combineReducers } from 'redux';
import HomePage from './HomePage/HomePage.js';

const navbarReducer = (state, action) => {
    if (!state) {
        state = {
            hidden: false
        }
    }
    switch (action.type) {
        case "hideNavbar":
            return state = {
                ...state,
                hidden: action.hidden
            }
        default:
            return state = {
                ...state
            }
    }
}

const dotPlacementReducer = (state, action) => {
    if (!state) {
        state = {
            topPercent: `${null}%`,
            leftPercent: `${null}%`,
        }
    }
    switch (action.type) {
        case "changeDotLocation":
            return state = {
                ...state,
                topPercent: `${action.topPercent}%`,
                leftPercent: `${action.leftPercent}%`,
            }
        case "resetAll":
            return state = {
                topPercent: `${null}%`,
                leftPercent: `${null}%`,
            }
        default:
            return state = {
                ...state
            }
    }
}

const currentPageReducer = (state, action) => {
    if (!state) {
        state = {
            currentPage: <HomePage />,
            hidden: false
        }
    }
    switch (action.type) {
        case "changeCurrentPage":
            return state = {
                ...state,
                currentPage: action.currentPage,
                hidden: action.hidden
            }
        default:
            return state = {
                ...state
            }
    }
}

const randomSaccadesReducer = (state, action) => {
    if (!state) {
        state = {
            centerDotColor: "Black",
            extraDotColor: "Red",
            dotSpeed: 1,
            dotNumber: 10
        }
    }
    switch (action.type) {
        case "changeRSCenterDotColor":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor
            }
        case "changeRSExtraDotColor":
            return state = {
                ...state,
                extraDotColor: action.extraDotColor
            }
        case "changeRSDotSpeed":
            return state = {
                ...state,
                dotSpeed: Number(action.dotSpeed)
            }
        case "changeRSDotNumber":
            return state = {
                ...state,
                dotNumber: Number(action.dotNumber)
            }
        case "resetRS":
            return state = {
                centerDotColor: "Black",
                extraDotColor: "Red",
                dotSpeed: 1,
                dotNumber: 10
            }
        case "savedExerciseRandomSaccades":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor,
                extraDotColor: action.extraDotColor,
                dotSpeed: action.dotSpeed,
                dotNumber: action.dotNumber,
            }
        default:
            return state = {
                ...state
            }
    }
}

const staticDotsReducer = (state, action) => {
    if (!state) {
        state = {
            centerDotColor: "Black",
            extraDotColor: "Red",
        }
    }
    switch (action.type) {
        case "changeSDCenterDotColor":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor
            }
        case "changeSDExtraDotColor":
            return state = {
                ...state,
                extraDotColor: action.extraDotColor
            }
        case "savedExerciseStaticDots":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor,
                extraDotColor: action.extraDotColor
            }
        case "resetSD":
            return state = {
                centerDotColor: "Black",
                extraDotColor: "Red",
            }
        default:
            return state = {
                ...state
            }
    }
}

const opkReducer = (state, action) => {
    if (!state) {
        state = {
            stripeColor: "Red",
            backgroundColor: "White",
            scrollSpeed: 1
        }
    }
    switch (action.type) {
        case "changeOPKStripeColor":
            return state = {
                ...state,
                stripeColor: action.stripeColor
            }
        case "changeOPKBackgroundColor":
            return state = {
                ...state,
                backgroundColor: action.backgroundColor
            }
        case "changeOPKScrollSpeed":
            return state = {
                ...state,
                scrollSpeed: action.scrollSpeed
            }
        case "resetOPK":
            return state = {
                stripeColor: "Red",
                backgroundColor: "White",
                scrollSpeed: 1
            }
        case "savedExerciseOPK":
            return state = {
                ...state,
                stripeColor: action.stripeColor,
                backgroundColor: action.backgroundColor,
                scrollSpeed: action.scrollSpeed,
            }
        default:
            return state = {
                ...state
            }
    }
}

const pursuitsReducer = (state, action) => {
    if (!state) {
        state = {
            direction: "TLtoBR",
            dotColor: "Red",
            dotSpeed: 1,
            cycles: 1,
        }
    }
    switch (action.type) {
        case "changePursuitsDirection":
            return state = {
                ...state,
                direction: action.direction
            }
        case "changePursuitsDotColor":
            return state = {
                ...state,
                dotColor: action.dotColor
            }
        case "changePursuitsDotSpeed":
            return state = {
                ...state,
                dotSpeed: action.dotSpeed
            }
        case "changePursuitsCycles":
            return state = {
                ...state,
                cycles: action.cycles
            }
        case "resetOPK":
            return state = {
                direction: "TLtoBR",
                dotColor: "Red",
                dotSpeed: 1,
                cycles: 1,
            }
        case "savedExercisePursuits":
            return state = {
                ...state,
                direction: action.direction,
                dotColor: action.dotColor,
                dotSpeed: action.dotSpeed,
                cycles: action.cycles,
            }
        default:
            return state = {
                ...state
            }
    }
}

const saccadesReducer = (state, action) => {
    if (!state) {
        state = {
            direction: "TLtoBR",
            dotColor: "Red",
            dotSpeed: 1,
            cycles: 1,
            steps: 3,
        }
    }
    switch (action.type) {
        case "changeSaccadesDirection":
            return state = {
                ...state,
                direction: action.direction
            }
        case "changeSaccadesDotColor":
            return state = {
                ...state,
                dotColor: action.dotColor
            }
        case "changeSaccadesDotSpeed":
            return state = {
                ...state,
                dotSpeed: action.dotSpeed
            }
        case "changeSaccadesCycles":
            return state = {
                ...state,
                cycles: action.cycles
            }
        case "changeSaccadesSteps":
            return state = {
                ...state,
                steps: action.steps
            }
        case "resetSaccades":
            return state = {
                direction: "TLtoBR",
                dotColor: "Red",
                dotSpeed: 1,
                cycles: 1,
                steps: 3,
            }
        case "savedExerciseSaccades":
            return state = {
                ...state,
                direction: action.direction,
                dotColor: action.dotColor,
                dotSpeed: action.dotSpeed,
                cycles: action.cycles,
                steps: action.steps,
            }
        default:
            return state = {
                ...state
            }
    }
}

const combinationReducer = (state, action) => {
    if (!state) {
        state = {
            dotColor: "Red",
            masterArray: [],
            exerciseTypeCheck: "Pursuits"
        }
    }
    switch (action.type) {
        case "addListItem":
            return state = {
                ...state,
                masterArray: [
                    ...state.masterArray,
                    {
                        "exerciseType": action.exerciseType,
                        "direction": action.direction,
                        "dotSpeed": action.dotSpeed,
                        "dotSteps": action.dotSteps
                    }
                ]
            }
        case "changeCombinationDotColor":
            return state = {
                ...state,
                dotColor: action.dotColor
            }
        case "changeCombinationExerciseType":
            return state = {
                ...state,
                exerciseTypeCheck: action.exerciseType
            }
        case "combinationRemoveArrayItem":
            return state = {
                ...state,
                masterArray: action.newArray
            }
        case "resetCombination":
            return state = {
                dotColor: "Red",
                masterArray: [],
                exerciseTypeCheck: "Pursuits",
            }
        case "savedExerciseCombination":
            return state = {
                ...state,
                dotColor: action.dotColor,
                masterArray: action.masterArray,
                exerciseTypeCheck: action.exerciseTypeCheck,
            }
        default:
            return state = {
                ...state,
            }
    }
}

const antiSaccadesReducer = (state, action) => {
    if (!state) {
        state = {
            rightHidden: true,
            leftHidden: true,
            centerDotColor: "Black",
            trueExtraDotColor: "Red",
            extraDotColor: "Red",
            dotSpeed: 1,
            cycles: 10,
            goNoGo: "Off",
            goNoGoDotColor: "Green",
        }
    }
    switch (action.type) {
        case "changeHiddenDot":
            return state = {
                ...state,
                rightHidden: action.rightHidden,
                leftHidden: action.leftHidden,
            }
        case "changeAntiSaccadesCenterDotColor":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor
            }
        case "changeAntiSaccadesExtraDotColor":
            return state = {
                ...state,
                extraDotColor: action.extraDotColor
            }
        case "changeAntiSaccadesTrueExtraDotColor":
            return state = {
                ...state,
                extraDotColor: action.extraDotColor,
                trueExtraDotColor: action.extraDotColor
            }
        case "changeAntiSaccadesDotSpeed":
            return state = {
                ...state,
                dotSpeed: action.dotSpeed
            }
        case "changeAntiSaccadesCycles":
            return state = {
                ...state,
                cycles: action.cycles
            }
        case "changeAntiSaccadesGoNoGo":
            return state = {
                ...state,
                goNoGo: action.goNoGo
            }
        case "changeAntiSaccadesGoNoGoDotColor":
            return state = {
                ...state,
                goNoGoDotColor: action.goNoGoDotColor
            }
        case "savedExerciseAntiSaccades":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor,
                trueExtraDotColor: action.trueExtraDotColor,
                extraDotColor: action.extraDotColor,
                dotSpeed: action.dotSpeed,
                cycles: action.cycles,
                goNoGo: action.goNoGo,
                goNoGoDotColor: action.goNoGoDotColor
            }
        case "resetAntiSaccades":
            return state = {
                rightHidden: true,
                leftHidden: true,
                centerDotColor: "Black",
                trueExtraDotColor: "Red",
                extraDotColor: "Red",
                dotSpeed: 1,
                cycles: 10,
                goNoGo: "Off",
                goNoGoDotColor: "Green",
            }
        default:
            return state = {
                ...state
            }
    }
}


const createAccountReducer = (state, action) => {
    if (!state) {
        state = {
            createUsername: "",
            createPassword1: "",
            createPassword2: "",
            showPassword: "password"
        }
    }
    switch (action.type) {
        case "changeCreateUsername":
            return state = {
                ...state,
                createUsername: action.createUsername
            }
        case "changeCreatePassword1":
            return state = {
                ...state,
                createPassword1: action.createPassword1
            }
        case "changeCreatePassword2":
            return state = {
                ...state,
                createPassword2: action.createPassword2
            }
        case "changeShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetCreateAccount":
            return state = {
                createUsername: "",
                createPassword1: "",
                createPassword2: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

const changePasswordReducer = (state, action) => {
    if (!state) {
        state = {
            oldPassword: "",
            newPassword1: "",
            newPassword2: "",
            showPassword: "password"
        }
    }
    switch (action.type) {
        case "changeOldPassword":
            return state = {
                ...state,
                oldPassword: action.oldPassword
            }
        case "changeNewPassword1":
            return state = {
                ...state,
                newPassword1: action.newPassword1
            }
        case "changeNewPassword2":
            return state = {
                ...state,
                newPassword2: action.newPassword2
            }
        case "changeShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetChangePassword":
            return state = {
                oldPassword: "",
                newPassword1: "",
                newPassword2: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

const logInReducer = (state, action) => {
    if (!state) {
        state = {
            logInUsername: "",
            logInPassword: "",
            showPassword: "password",
        }
    }
    switch (action.type) {
        case "changeLogInUsername":
            return state = {
                ...state,
                logInUsername: action.logInUsername
            }
        case "changeLogInPassword":
            return state = {
                ...state,
                logInPassword: action.logInPassword
            }
        case "changeLogInShowPassword":
            return state = {
                ...state,
                showPassword: action.showPassword
            }
        case "resetLogInData":
            return state = {
                logInUsername: "",
                logInPassword: "",
                showPassword: "password",
            }
        default:
            return state = {
                ...state,
            }
    }
}

export default combineReducers({
    navbarReducer: navbarReducer,
    staticDotsReducer: staticDotsReducer,
    currentPageReducer: currentPageReducer,
    dotPlacementReducer: dotPlacementReducer,
    randomSaccadesReducer: randomSaccadesReducer,
    opkReducer: opkReducer,
    pursuitsReducer: pursuitsReducer,
    saccadesReducer: saccadesReducer,
    combinationReducer: combinationReducer,
    antiSaccadesReducer: antiSaccadesReducer,
    createAccountReducer: createAccountReducer,
    logInReducer: logInReducer,
    changePasswordReducer: changePasswordReducer,
});
