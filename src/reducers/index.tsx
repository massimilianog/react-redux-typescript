import { StoreState } from '../types';
import { Reducer, combineReducers } from 'redux';
import userList from './userList';
import counter from './counter';

const app: Reducer = combineReducers({
    counter,
    userList,
});

export default app;

/** selectors */

export const getIsFetching = (state: StoreState) => {
    return state.userList.isFetching;
};

export const getErrorMessage = (state: StoreState) => {
    return state.userList.errorMessage;
};
