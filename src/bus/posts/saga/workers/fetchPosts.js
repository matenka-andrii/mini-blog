// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import { postsActions } from '../../actions';

export function* callFetchPostsWorker () {
    try {
        const response = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts');
        const posts = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('fetchPostsWorker response.status not 200');
        }

        yield put(postsActions.fetchPosts(posts));
    } catch (error) {
        yield put(postsActions.fetchPostsFail(error, 'fetchPostsWorker'));
    }
}
