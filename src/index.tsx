import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import Counter from './components/counter';
import Home from './components/home';
import UserList from './components/userList';
import UserLisLocalState from './components/userListLocalState';
import UserListLocalStateAndReducer from './components/userListLocalStateAndReducer';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { Switch, BrowserRouter, Link } from 'react-router-dom';
import configureStore from './configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Link to="/home">Home</Link>
            <span> | </span>
            <Link to="/counter">Hello</Link>
            <span> | </span>
            <Link to="/userList">User List</Link>
            <span> | </span>
            <Link to="/userListLocalState">User List (local state)</Link>
            <span> | </span>
            <Link to="/userListLocalStateAndReducer">User List (local state - useReducer)</Link>
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/counter" component={Counter} />
                <Route path="/userList" component={UserList} />
                <Route path="/userListLocalState" component={UserLisLocalState} />
                <Route path="/userListLocalStateAndReducer" component={UserListLocalStateAndReducer} />
            </Switch>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
