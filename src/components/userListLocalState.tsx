import React from 'react';
import useFetchUsers from '../hooks/useFetchUsers';

const UserLisLocalState = () => {
    const [users, isFetching, errorMessage, fetchUserList] = useFetchUsers();

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
            <p>User List (local state - custom hooks):</p>
            {users.map(user => (
                <div key={user.id}>{user.name}</div>
            ))}
        </div>
    );
};

export default UserLisLocalState;
