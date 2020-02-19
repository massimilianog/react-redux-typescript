import React, { useEffect, useState, useReducer, Reducer } from 'react';
import { User } from '../types';
import fetchUsers from '../api';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// similar to <UserLisLocalState> with useReducer

type USER_LIST_STATE = {
    users?: User[];
    isFetching: boolean;
    errorMessage?: string;
};

type USER_LIST_ACTION =
    | { type: 'FETCH_USER_LIST_REQUEST' }
    | { type: 'FETCH_USER_LIST_SUCCESS'; users: User[] }
    | { type: 'FETCH_USER_LIST_FAILURE'; errorMessage: string };

export const reducer: Reducer<USER_LIST_STATE, USER_LIST_ACTION> = (
    state: USER_LIST_STATE,
    action: USER_LIST_ACTION
) => {
    switch (action.type) {
        case 'FETCH_USER_LIST_REQUEST':
            return { isFetching: true };
        case 'FETCH_USER_LIST_SUCCESS':
            return { isFetching: false, users: [...action.users] };
        case 'FETCH_USER_LIST_FAILURE':
            return { isFetching: false, errorMessage: action.errorMessage };
        default:
            throw new Error();
    }
};

const UserListNoReduxAndReducer = () => {
    const [state, dispatch] = useReducer(reducer, { users: [], isFetching: false, errorMessage: '' });

    const fetchUserList = () => {
        dispatch({ type: 'FETCH_USER_LIST_REQUEST' });
        delay(1000).then(() => {
            fetchUsers().then(
                (users: User[]) => {
                    dispatch({ type: 'FETCH_USER_LIST_SUCCESS', users: users });
                },
                error => {
                    dispatch({ type: 'FETCH_USER_LIST_FAILURE', errorMessage: error.message });
                }
            );
        });
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    if (state.isFetching) {
        return <p style={{ textAlign: 'center' }}>Loading ...</p>;
    }

    if (state.errorMessage) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Error: {state.errorMessage}</p>
                <button onClick={() => fetchUserList()}>Retry</button>
            </div>
        );
    }
    const users = state.users || [];
    return (
        <div className="hello">
            <p>User List (local state - useReducer):</p>
            {users.map((user: User) => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserListNoReduxAndReducer;
