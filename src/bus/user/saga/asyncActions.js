// Core
import { asyncTypes } from './asyncTypes';

export const userActionsAsync = Object.freeze({
    fetchUserAsync: (id) => ({
        type:    asyncTypes.FETCH_USER_ASYNC,
        payload: id,
    }),
});
