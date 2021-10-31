import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm';
import Error from './Error'

const TodoAdd = ({ handleAddTodo }) => {

    const [error, setError] = useState(false);
    const [{ description }, HandleInputChage, reset] = useForm({
        description: ''
    })

    const handleOnSubmit = ( e ) => {
       
        e.preventDefault();

        if( description.trim().length <=1 ){
            setError(true);
            return;
        }

        setError(false);
        
       const newTodo = {
                id: new Date().getTime(),
                desc: description,
                done: false
        };

        handleAddTodo( newTodo )
        reset();
    }

    return (
        <>
            { ( error ) ? <Error mensaje="Debe completar correctamente el campo" />   : <h4>Agregar Todo</h4> }
                            <hr />
                            <form className="form-group" onSubmit={ handleOnSubmit }>
                                <input 
                                    type="text" 
                                    className="form-control mb-3" 
                                    name="description"
                                    placeholder="Aprender..."
                                    autoComplete="off"
                                    value={ description }
                                    onChange={ HandleInputChage }
                                />
                                <button 
                                    type="submit" 
                                    className="btn btn-block btn-outline-success"
                                >Agregar</button>
                            </form>
        </>
    )
}

export default TodoAdd
