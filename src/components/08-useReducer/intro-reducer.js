
const initialState = [{
    id: 1,
    todo: 'ser programador',
    done: false
}];

const todoReducer = ( state = initialState, action ) => {
    if (action?.type === 'agregar') {
        return [ ...state, action.payload ]  
    } 
    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: "seguir aprendiendo Programacion",
    done: false
    
};

const agregarTodoAction = {
    type: 'agregar', // el type nos dice que va hacer la action
    payload: newTodo // argumento para la action
};

todos = todoReducer(todos, agregarTodoAction);


console.log( todos );
