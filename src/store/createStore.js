import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default () => {
    const middlewares = [];

    const sagaMiddleware = createSagaMiddleware();
    middlewares.push(sagaMiddleware);

    if (process.env.NODE_ENV !== 'production') {
        // create the logger
        const logger = createLogger();
        middlewares.push(logger);
    }

    const enhancer = compose(applyMiddleware(...middlewares));
    const store = createStore(rootReducer, enhancer);

    sagaMiddleware.run(rootSaga);

    return store;
}