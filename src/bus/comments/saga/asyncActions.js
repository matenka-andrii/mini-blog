// Core
import { asyncTypes } from './asyncTypes';

export const commentsActionsAsync = Object.freeze({
    fetchCommentsAsync: (id) => ({
        type:    asyncTypes.FETCH_COMMENTS_ASYNC,
        payload: id,
    }),
});
