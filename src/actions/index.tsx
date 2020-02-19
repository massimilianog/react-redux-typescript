import * as constants from '../constants';
import { Dispatch } from 'redux';
import { User } from '../types';
import fetchUsers from '../api';
import { getIsFetching } from '../reducers';

export interface Increment {
    type: typeof constants.INCREMENT;
}

export interface Decrement {
    type: typeof constants.DECREMENT;
}

export type CounterAction = Increment | Decrement;

export function increment(): Increment {
    return {
        type: constants.INCREMENT,
    };
}

export function decrement(): Decrement {
    return {
        type: constants.DECREMENT,
    };
}

// User List

export interface FetchUserListAction {
    type:
        | typeof constants.FETCH_USER_LIST_REQUEST
        | typeof constants.FETCH_USER_LIST_SUCCESS
        | typeof constants.FETCH_USER_LIST_FAILURE;
    users?: User[];
    errorMessage?: string;
}

export const fetchUserList = () => (dispatch: Dispatch<FetchUserListAction>, getState: Function) => {
    if (getIsFetching(getState())) {
        return Promise.resolve();
    }

    dispatch({
        type: constants.FETCH_USER_LIST_REQUEST,
    });

    setTimeout(() => {
        return fetchUsers().then(
            (users: User[]) => {
                dispatch({
                    type: constants.FETCH_USER_LIST_SUCCESS,
                    users,
                });
            },
            error => {
                dispatch({
                    type: constants.FETCH_USER_LIST_FAILURE,
                    errorMessage: error.message,
                });
            }
        );
    }, 1000);
};

export const fetchUserListRequest = (): FetchUserListAction => {
    return {
        type: constants.FETCH_USER_LIST_REQUEST,
    };
};

export const fetchUserListSuccess = (): FetchUserListAction => {
    return {
        type: constants.FETCH_USER_LIST_SUCCESS,
    };
};

// export const fetchUserListFailure = (): FetchUserListAction => {
//     return {
//         type: constants.FETCH_USER_LIST_FAILURE
//     };
// }
