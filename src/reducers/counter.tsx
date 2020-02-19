import { Reducer } from 'redux';
import { CounterStoreState } from '../types';
import { CounterAction } from '../actions';
import { DECREMENT, INCREMENT } from '../constants';

export const counter: Reducer = (state: CounterStoreState = { count: 0 }, action: CounterAction): CounterStoreState => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
};

export default counter;
