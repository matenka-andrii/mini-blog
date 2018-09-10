// Instruments
import { types } from './types';

export const commentsActions = Object.freeze({
    fetchComments: (comments) => ({
        type:    types.FETCH_COMMENTS,
        payload: comments,
    }),
    fetchCommentsFail: (error, meta = null) => ({
        type:    types.FETCH_COMMENTS_FAIL,
        payload: error,
        error:   true,
        meta,
    }),
    resetComments: () => ({
        type: types.RESET_COMMENTS,
    }),
});
