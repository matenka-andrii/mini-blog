// Core
import { call, put } from 'redux-saga/effects';

// Instruments
import { userActions } from '../../actions';

export function* callFetchUserWorker ({ payload: id }) {
    try {
        const response = yield call(fetch, `https://jsonplaceholder.typicode.com/users/${id}`);
        const user = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error('fetchUserWorker response.status not 200');
        }

        yield put(userActions.fetchUser(user));
    } catch (error) {
        yield put(userActions.fetchUserFail(error, 'fetchUserWorker'));
    }
}
