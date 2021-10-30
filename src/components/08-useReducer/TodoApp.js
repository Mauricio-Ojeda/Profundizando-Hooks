import React, { useEffect, useReducer, useState } from 'react';
import { useForm } from '../../hooks/useForm';
import './todoApp.css';
import { todoReducer } from './todoReducer';


// const initialState = [{
//     id: new Date().getTime(),
//     desc: 'Aprender React',
//     done: true
// }];

const init = () => {
    return JSON.parse( localStorage.getItem( 'todos' ) ) || [];

}

const TodoApp = () => {

    const [error, setError] = useState(false);
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    const [{ description }, HandleInputChage, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem( 'todos', JSON.stringify( todos ) );
        
    }, [todos]);

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

        const action = {
            type: 'add',
            payload: newTodo
        };
        
        dispatch( action )
        reset();
    }

    return (
        <div className="container mt-4">
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>
            <div className="row row-main">
                <div className="col-md-4">
                        <ul className="list-group list-group-flush">
                            {
                                todos.map( ({ id, desc }, index) => (
                                    <li key={id} className="list-group-item " >
                                            <div className="row row-li p-3">
                                                <div className="col-8">
                                                    <p className="text-left"> {index + 1}. { desc }  </p>

                                                </div>
                                                <div className="col-4 ">
                                                    <button className="btn btn-outline-danger d-flex justify-content-end">Borrar</button>

                                                </div>
                                            </div>
                                            
                                    </li>
                                ))
                            }
                        </ul>
                </div>
                <div className="col-md-4">
                            { ( error ) ? <h4 className="bg-danger text-light p-4 "> Debe completar correctamente el campo </h4> : <h4>Agregar Todo</h4> }
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
                </div>
            </div>
        </div>
    )
}

export default TodoApp
