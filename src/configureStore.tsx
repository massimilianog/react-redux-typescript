import { createStore, Action, applyMiddleware, compose, Middleware } from 'redux';
import { StoreState } from './types';
import app from './reducers/index';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const configureStore = () => {
    const middlewares: Middleware[] = [thunk];

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore<StoreState, Action, any, any>(app, composeEnhancers(applyMiddleware(...middlewares)));
};

export default configureStore;
