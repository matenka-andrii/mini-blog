// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import { commentsActions } from '../../actions';

export function* callFetchCommentsWorker ({ payload: id }) {
    try {
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        const comments = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('fetchCommentsWorker response.status not 200');
        }

        yield put(commentsActions.fetchComments(comments));
    } catch (error) {
        yield put(commentsActions.fetchCommentsFail(error, 'fetchCommentsWorker'));
    }
}
