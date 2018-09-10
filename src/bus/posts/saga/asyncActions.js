// Core
import { asyncTypes } from './asyncTypes';

export const postsActionsAsync = Object.freeze({
    fetchPostsAsync: () => ({
        type: asyncTypes.FETCH_POSTS_ASYNC,
    }),
});
