import { useEffect, useState } from 'react';
import { User } from '../types';
import fetchUsers from '../api';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const useFetchUsers = (): [User[], boolean, string, Function] => {
    const [users, setUsers] = useState([] as User[]);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const fetchUserList = () => {
        setIsFetching(true);
        setErrorMessage('');
        delay(1000).then(() => {
            fetchUsers().then(
                (users: User[]) => {
                    setUsers(users);
                    setIsFetching(false);
                },
                error => {
                    setErrorMessage(error.message);
                    setIsFetching(false);
                }
            );
        });
    };

    useEffect(() => {
        fetchUserList();
    }, []);

    return [users, isFetching, errorMessage, fetchUserList];
};

export default useFetchUsers;
