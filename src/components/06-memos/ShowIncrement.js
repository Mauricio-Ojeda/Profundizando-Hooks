import React from 'react'

const ShowIncrement = React.memo( ({ increment }) => {

    console.log('me volvi a generar soy programador')

    return (
        <button
            className="btn btn-dark"
            onClick={ () => increment( 5 ) }
        >
            incrementar
        </button>
    )
})

export default ShowIncrement
