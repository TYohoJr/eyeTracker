import React from 'react';
import { combineReducers } from 'redux';
import Options from './Options/Options.js';

const currentPageReducer = (state, action) => {
    if(!state) {
        state = {
            currentPage:<Options />
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
            dotSpeed: 0
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
                dotSpeed: action.dotSpeed
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
});
