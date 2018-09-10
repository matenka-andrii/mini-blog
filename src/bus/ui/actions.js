// Instruments
import { types } from './types';

export const uiActions = Object.freeze({
    setSearchKeyState: (key) => ({
        type:    types.SET_SEARCH_KEY_STATE,
        payload: key,
    }),
});
