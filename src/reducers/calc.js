import * as types from '../actions';
import update from 'react-addons-update';

const initialState = {
    val: 0,
    diff: 1
};

export default function calc(state = initialState, action) {
    switch(action.type) {
        case types.INCREASE:
            return { ...state, val: state.val + state.diff*1 }
        case types.DECREASE:
            return { ...state, val: state.val - state.diff};
        case types.DIFF:
            return { ...state, diff: action.diff}
        default:
            return state;
    }
}