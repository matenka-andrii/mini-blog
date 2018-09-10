// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callFetchPostsWorker } from './workers/fetchPosts';

export const postsWatchers = Object.freeze({
    * watchFetchPosts () {
        yield takeEvery(asyncTypes.FETCH_POSTS_ASYNC, callFetchPostsWorker);
    },
});
