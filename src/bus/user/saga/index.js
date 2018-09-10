// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import { asyncTypes } from './asyncTypes';
import { callFetchUserWorker } from './workers/fetchUser';

export const userWatchers = Object.freeze({
    * watchFetchUser () {
        yield takeEvery(asyncTypes.FETCH_USER_ASYNC, callFetchUserWorker);
    },
});
