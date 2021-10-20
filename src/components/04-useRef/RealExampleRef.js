import React, { useState } from 'react'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setShow] = useState( false )

    return (
        <div>
            <h1>RealExampleRef</h1>
            <hr />

            { show && <MultipleCustomHooks /> }

            <button className="btn btn-outline-secondary mt-4" onClick={ () => setShow( !show )}>
                Mostrar/Esconder
            </button>

        </div>
    )
}

export default RealExampleRef
