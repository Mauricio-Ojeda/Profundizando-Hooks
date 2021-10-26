import React, { useReducer } from 'react';
import './todoApp.css';
import { todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: true
}];

const TodoApp = () => {


    const [ todos ] = useReducer(todoReducer, initialState)

    console.log(todos);
    return (
        <div className="container mt-4">
            <h1>TodoApp ( { todos.length } )</h1>
            <hr/>
            <div className="row row-main">
                <div className="col-md-4">
                        <ul className="list-group list-group-flush">
                            {
                                todos.map( ({ id, desc }, index) => (
                                <li key={id} className="list-group-item" >
                                        <div className="row row-li">
                                            <div className="col-6">
                                                <p className="text-center"> {index + 1}. { desc }  </p>

                                            </div>
                                            <div className="col-6">
                                                <button className="btn btn-danger">Borrar</button>

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
                            <form className="form-group">
                                <input type="text" className="form-control mb-3" />
                                <button className="btn btn-block btn-success">Agregar</button>
                            </form>
                </div>
            </div>
        </div>
    )
}

export default TodoApp
