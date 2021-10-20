import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()
    
    const handleOnClick = () => inputRef.current.select();

    return (
        <div>
            <h1>FocusScreen</h1>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Su Nombre"
            />

            <button 
                className="btn btn-outline-dark mt-4"
                onClick={ handleOnClick }
            >
                Focus
            </button>
        </div>
    )
}

export default FocusScreen
