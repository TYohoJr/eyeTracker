import { combineReducers } from 'redux';

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
});
