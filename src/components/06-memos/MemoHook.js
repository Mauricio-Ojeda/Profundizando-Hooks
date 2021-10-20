import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';

const MemoHook = () => {

    const { counter, increment } = useCounter(100);

    const [show, setShow] = useState(true);

   
    const memoHeavyProcess = useMemo(() => heavyProcess( counter ), [ counter ])

    return (
        <>
            <h3>Counter: <small>{ counter }</small>   </h3>
            <hr/>

            <p> { memoHeavyProcess } </p>

            <button className="btn btn-primary" onClick={ increment }>
                +1
            </button>

            <button className="btn btn-secondary mx-3" onClick= { () => setShow( !show ) }>
                Show/Hide { JSON.stringify( show )}
            </button> 


        </>
    )
}

export default MemoHook
