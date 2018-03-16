export const ADD_FACE = 'ADD_FACE';
export const ADD_DEVIL = 'ADD_DEVIL';

export const addFace = (item) => {
	return ({
	type: ADD_FACE,
    item
})};


export const addDevil = (item) => {
	return ({
	    type: ADD_DEVIL,
	    item
	})};

