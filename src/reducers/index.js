import {ADD_FACE, ADD_DEVIL} from '../actions';

const initialState = {
    faces: 6,
    devils: 8
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === ADD_FACE) {
        let newFaces = state.faces +1;
        let newObj = Object.assign({}, state, {
            faces: newFaces
        });
        return newObj;
    }
    else if (action.type === ADD_DEVIL) {
         let newDevils = state.devils + 1;
         let newObj = Object.assign({}, state, {
            devils: newDevils
         });
        return newObj;
    }
    return state;
};