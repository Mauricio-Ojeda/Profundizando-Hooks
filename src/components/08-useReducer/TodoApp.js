import React, { useReducer } from 'react';
import './todoApp.css';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: true
}];

const TodoApp = () => {


    const [ todos, dispatch ] = useReducer(todoReducer, initialState)

    const handleOnSubmit = ( e ) => {
        console.log(todos);
        e.preventDefault();
        console.log('handle on sumbit')
        const newTodo = {
                id: new Date().getTime(),
                desc: 'Aprender BackEnd',
                done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };
        
        dispatch( action )
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
                            <h4>Agregar Todo</h4>
                            <hr />
                            <form className="form-group" onSubmit={ handleOnSubmit }>
                                <input type="text" className="form-control mb-3" />
                                <button type="submit" className="btn btn-block btn-outline-success">Agregar</button>
                            </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
