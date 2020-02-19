import React from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { CounterStoreState } from '../types';

export interface Props {
    count: number;
    onIncrement?: () => void;
    onDecrement?: () => void;
}

export const Counter = ({ count = 1, onIncrement, onDecrement }: Props) => {
    return (
        <div className="hello">
            <div>Counter: {count}</div>
            <div>
                <button onClick={onDecrement}>-</button>
                <button onClick={onIncrement}>+</button>
            </div>
        </div>
    );
};

export function mapStateToProps({ counter: { count } }: { counter: CounterStoreState }) {
    return {
        count,
    };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CounterAction>) {
    return {
        onIncrement: () => dispatch(actions.increment()),
        onDecrement: () => dispatch(actions.decrement()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
