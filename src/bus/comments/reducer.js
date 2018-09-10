// Core
import { List, fromJS } from 'immutable';

// Instrument
import { types } from './types';

const initialState = List();

export const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_COMMENTS:
            return fromJS(action.payload);

        case types.RESET_COMMENTS:
            return initialState;

        default:
            return state;
    }
};
