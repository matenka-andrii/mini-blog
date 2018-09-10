// Core
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const logger = createLogger({
    duration:  true,
    collapsed: true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

const sagaMiddleware = createSagaMiddleware();
const history = createBrowserHistory();
const routerMiddleware = createRouterMiddleware(history);

const middleware = [sagaMiddleware, routerMiddleware];

const dev = process.env.NODE_ENV === 'development';

if (dev) {
    middleware.push(logger);
}

export { dev, middleware, sagaMiddleware, history };
