// Core
import { all } from 'redux-saga/effects';

//Instruments
import { commentsWatchers } from '../bus/comments/saga';
import { postsWatchers } from '../bus/posts/saga';
import { userWatchers } from '../bus/user/saga';

export function* rootSaga () {
    yield all([
        commentsWatchers.watchFetchComments(),
        postsWatchers.watchFetchPosts(),
        userWatchers.watchFetchUser(),
    ]);
}
