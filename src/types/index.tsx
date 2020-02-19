export interface CounterStoreState {
    count: number;
}

export interface UserListStoreState {
    users: User[];
    isFetching: boolean;
    errorMessage: string;
}

export interface User {
    id: number;
    name: string;
}

export interface StoreState {
    counter: CounterStoreState;
    userList: UserListStoreState;
}
