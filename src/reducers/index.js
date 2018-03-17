import {ADD_FACE, ADD_DEVIL} from '../actions';

const initialState = {
    faces: [],
    devils: []
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === ADD_FACE) {
        let newFaces = state.faces.slice();
        newFaces.push(action.item);
        let newObj = Object.assign({}, state, {
            faces: newFaces
        });
        return newObj;
    }
    else if (action.type === ADD_DEVIL) {
         let newDevils = state.devils.slice();
         newDevils.push(action.item);
         let newObj = Object.assign({}, state, {
            devils: newDevils
         });
        return newObj;
    }
    return state;
};