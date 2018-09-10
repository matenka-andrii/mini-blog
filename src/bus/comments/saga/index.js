// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callFetchCommentsWorker } from './workers/fetchComments';

export const commentsWatchers = Object.freeze({
    * watchFetchComments () {
        yield takeEvery(asyncTypes.FETCH_COMMENTS_ASYNC, callFetchCommentsWorker);
    },
});
