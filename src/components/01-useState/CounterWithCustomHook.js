import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hoolk: { state }</h1>
            <hr />
            <button className="btn btn-danger" onClick={ () => decrement(2) }> - 1 </button>
            <button className="btn btn-secondary" onClick={ reset }> reset </button>
            <button className="btn btn-success" onClick={ () => increment(2) }> + 1 </button>
        </>
    )
}

export default CounterWithCustomHook
