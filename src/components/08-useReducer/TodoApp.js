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
        <div>
            <h1>TodoApp</h1>
            <hr/>
            <ul>
                <li>hola Soy Programador</li>
                <li>hola Gano Buena Plata</li>
                <li>hola Hablo bien Ingles</li>
            </ul>
        </div>
    )
}

export default TodoApp
