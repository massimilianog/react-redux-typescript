import userList, { users } from './userList';
import { UserListStoreState, User } from '../types';
import deepFreeze from 'deep-freeze';
import { FETCH_USER_LIST_REQUEST, FETCH_USER_LIST_SUCCESS, FETCH_USER_LIST_FAILURE } from '../constants/index';

it('reducers: users', () => {
    const initialState: User[] = [];

    deepFreeze(initialState); // mutation shoud fail the test

    const state = users(initialState, { type: FETCH_USER_LIST_REQUEST });
    expect(state).toEqual([]);

    deepFreeze(state); // mutation shoud fail the test

    const state2 = users(state, { type: FETCH_USER_LIST_SUCCESS, users: [{ id: 1, name: 'Bob' }] });
    expect(state2).toEqual([{ id: 1, name: 'Bob' }]);
});

it('reducers: userList', () => {
    const initialState: UserListStoreState = { users: [], isFetching: false, errorMessage: '' };

    deepFreeze(initialState); // mutation shoud fail the test

    const state = userList(initialState, { type: FETCH_USER_LIST_REQUEST });
    expect(state).toEqual({ users: [], isFetching: true, errorMessage: null });

    deepFreeze(state); // mutation shoud fail the test

    const state2 = userList(state, { type: FETCH_USER_LIST_SUCCESS, users: [{ id: 1, name: 'Bob' }] });
    expect(state2).toEqual({ users: [{ id: 1, name: 'Bob' }], isFetching: false, errorMessage: null });

    deepFreeze(state2); // mutation shoud fail the test

    const state3 = userList(state2, { type: FETCH_USER_LIST_FAILURE, errorMessage: 'error' });
    expect(state3).toEqual({ users: [], isFetching: false, errorMessage: 'error' });
});
