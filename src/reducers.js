import React from 'react';
import { combineReducers } from 'redux';
import HomePage from './HomePage/HomePage.js';

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
            currentPage: <HomePage />
        }
    }
    switch (action.type) {
        case "changeCurrentPage":
            return state = {
                ...state,
                currentPage: action.currentPage
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
            dotSpeed: .2,
            dotNumber: 5
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
                dotSpeed: .2,
                dotNumber: 5
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
        case "resetOPK":
            return state = {
                direction: "TLtoBR",
                dotColor: "Red",
                dotSpeed: 1
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
        default:
            return state = {
                ...state
            }
    }
}

const combinationReducer = (state, action) => {
    if (!state) {
        state = {
            exerciseType: [],
            direction: [],
            dotSpeed: [],
            dotSteps: [],
            dotColor: "red",
        }
    }
    switch (action.type) {
        case "addListItem":
            return state = {
                ...state,
                exerciseType: [...state.exerciseType, action.exerciseType],
                direction: [...state.direction, action.direction],
                dotSpeed: [...state.dotSpeed, action.dotSpeed],
                dotSteps: [...state.dotSteps, action.dotSteps],
            }
        case "changeCombinationDotColor":
            return state = {
                ...state,
                dotColor: action.dotColor
            }
        case "resetOPK":
            return state = {
                exerciseType: [],
                direction: [],
                dotSpeed: [],
                dotSteps: [],
                dotColor: "red",
            }
        default:
            return state = {
                ...state
            }
    }
}

export default combineReducers({
    staticDotsReducer: staticDotsReducer,
    currentPageReducer: currentPageReducer,
    dotPlacementReducer: dotPlacementReducer,
    randomSaccadesReducer: randomSaccadesReducer,
    opkReducer: opkReducer,
    pursuitsReducer: pursuitsReducer,
    saccadesReducer: saccadesReducer,
    combinationReducer: combinationReducer,
});
