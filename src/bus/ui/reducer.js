// Core
import { Map } from 'immutable';

// Instruments
import { types } from './types';

const initialState = Map({
    searchKey: '',
});

export const uiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_SEARCH_KEY_STATE:
            return state.set('searchKey', action.payload);

        default:
            return state;
    }
};
