import {ADD_FACE, ADD_DEVIL} from '../actions';

const initialState = {
    faces: [],
    devils: [],
    both: []
};

export const gameReducer = (state=initialState, action) => {
    if (action.type === ADD_FACE) {
        let newFaces = state.faces.slice();
        newFaces.push(action.item);
        let newBoth = state.both.slice();
        newBoth.push(action.item);
        let newObj = Object.assign({}, state, {
            faces: newFaces,
            both: newBoth
        });
        return newObj;
    }
    else if (action.type === ADD_DEVIL) {
         let newDevils = state.devils.slice();
         newDevils.push(action.item);
         let newBoth = state.both.slice();
        newBoth.push(action.item);
         let newObj = Object.assign({}, state, {
            devils: newDevils,
            both: newBoth
         });
        return newObj;
    }
    return state;
};