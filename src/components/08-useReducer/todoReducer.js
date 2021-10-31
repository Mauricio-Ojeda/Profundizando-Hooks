
export const todoReducer = ( state = [], action ) => { // recibe los estados y reliza una acccion segun el estado
    
    switch (action.type) {
        case 'add':            
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload );

        case 'toggle': // version togle con return explicito y ternario
            return state.map( todo => 
                ( todo.id === action.payload )
                    ? { ...todo, done: !todo.done }
                    : todo    
            ); 

        case 'toggle-old': //version toggle con if y return
            return state.map( todo => {
                if( todo.id === action.payload ){
                    return {
                        ...todo,
                        done: !todo.done
                    };
                } else {
                    return todo;
                }
            })   

        default:
            return state
    }
}
