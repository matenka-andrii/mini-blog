// Core
import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

// Instruments
import { commentsReducer as comments } from '../bus/comments/reducer';
import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { userReducer as user } from '../bus/user/reducer';

export const rootReducer = combineReducers({
    comments,
    posts,
    router,
    ui,
    user,
});
