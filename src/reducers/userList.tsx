import { FetchUserListAction } from '../actions';
import { User } from '../types';
import { FETCH_USER_LIST_REQUEST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from '../constants';
import { Reducer, combineReducers } from 'redux';

export const users: Reducer = (state = [], action: FetchUserListAction): User[] => {
    switch (action.type) {
        case FETCH_USER_LIST_REQUEST:
            return [...state];
        case FETCH_USER_LIST_SUCCESS:
            return action.users ? [...action.users] : [];
        case FETCH_USER_LIST_FAILURE:
            return [];
        default:
            return state;
    }
};

const isFetching: Reducer = (state = false, action: FetchUserListAction): boolean => {
    switch (action.type) {
        case FETCH_USER_LIST_REQUEST:
            return true;
        case FETCH_USER_LIST_SUCCESS:
        case FETCH_USER_LIST_FAILURE:
            return false;
        default:
            return state;
    }
};

const errorMessage = (state = null, action: FetchUserListAction) => {
    switch (action.type) {
        case FETCH_USER_LIST_FAILURE:
            return action.errorMessage;
        case FETCH_USER_LIST_SUCCESS:
        case FETCH_USER_LIST_REQUEST:
            return null;
        default:
            return state;
    }
};

const userList: Reducer = combineReducers({
    users,
    isFetching,
    errorMessage,
});

export default userList;
