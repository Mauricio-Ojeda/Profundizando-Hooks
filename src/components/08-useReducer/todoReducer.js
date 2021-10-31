
export const todoReducer = ( state = [], action ) => { // recibe los estados y reliza una acccion segun el estado
    
    switch (action.type) {
        case 'add':            
            return [ ...state, action.payload ];

        case 'delete':
            return state.filter( todo => todo.id !== action.payload ); 

        default:
            return state
    }
}
