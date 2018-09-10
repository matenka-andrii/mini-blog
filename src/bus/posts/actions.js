// Instruments
import { types } from './types';

export const postsActions = Object.freeze({
    fetchPosts: (posts) => ({
        type:    types.FETCH_POSTS,
        payload: posts,
    }),
    fetchPostsFail: (error, meta = null) => ({
        type:    types.FETCH_POSTS_FAIL,
        payload: error,
        error:   true,
        meta,
    }),
});
