import React from 'react';
import { combineReducers } from 'redux';
import HomePage from './HomePage/HomePage.js';

const dotPlacementReducer = (state, action) =>{
    if(!state) {
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
        default:
            return state = {
                ...state
            }
    }
}

const currentPageReducer = (state, action) => {
    if(!state) {
        state = {
            currentPage:<HomePage />
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

const formInputsReducer = (state, action) => {
    if (!state) {
        state = {
            centerDotColor: "Black",
            extraDotColor: "Red",
            dotSpeed: 1,
            dotNumber: 5
        }
    }
    switch (action.type) {
        case "changeCenterDotColor":
            return state = {
                ...state,
                centerDotColor: action.centerDotColor
            }
        case "changeExtraDotColor":
            return state = {
                ...state,
                extraDotColor: action.extraDotColor
            }
        case "changeDotSpeed":
            return state = {
                ...state,
                dotSpeed: Number(action.dotSpeed)
            }
        case "changeDotNumber":
            return state = {
                ...state,
                dotNumber: Number(action.dotNumber)
            }
        default:
            return state = {
                ...state
            }
    }
}

export default combineReducers({
    formInputsReducer: formInputsReducer,
    currentPageReducer: currentPageReducer,
    dotPlacementReducer: dotPlacementReducer,
});
