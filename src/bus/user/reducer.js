// Core
import { Map, fromJS } from 'immutable';

// Instrument
import { types } from './types';

const initialState = Map({
    address: Map({
        city:   '',
        suite:  '',
        street: '',
    }),
    company: Map({
        name: '',
    }),
    email:   '',
    name:    '',
    phone:   '',
    website: '',
});

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_USER:
            return fromJS(action.payload);

        case types.RESET_USER:
            return initialState;

        default:
            return state;
    }
};
