// Instruments
import { types } from './types';

export const userActions = Object.freeze({
    fetchUser: (user) => ({
        type:    types.FETCH_USER,
        payload: user,
    }),
    fetchUserFail: (error, meta = null) => ({
        type:    types.FETCH_USER_FAIL,
        payload: error,
        error:   true,
        meta,
    }),
    resetUser: () => ({
        type: types.RESET_USER,
    }),
});
