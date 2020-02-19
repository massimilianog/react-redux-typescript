import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../actions';
import { StoreState, User } from '../types';
import { getErrorMessage, getIsFetching } from '../reducers';

export interface Props {
    users: User[];
    fetchUserList: Function;
    errorMessage: string;
    isFetching: boolean;
}

const UserList = () => {
    const users = useSelector((state: StoreState) => state.userList.users);
    const errorMessage = useSelector((state: StoreState) => getErrorMessage(state));
    const isFetching = useSelector((state: StoreState) => getIsFetching(state));
    const dispatch = useDispatch();

    const fetchUserList = () => {
        dispatch(actions.fetchUserList());
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    if (isFetching) {
        return <p style={{ textAlign: 'center' }}>Loading ...</p>;
    }

    if (errorMessage) {
        return (
            <div style={{ textAlign: 'center' }}>
                <p>Error: {errorMessage}</p>
                <button onClick={() => fetchUserList()}>Retry</button>
            </div>
        );
    }
    return (
        <div className="hello">
            <p>User List:</p>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserList;
