import React from 'react'

const TodoListItem = ( { todo, index, handleDelete, handleToggle } ) => {
   
    const { id, desc, done } = todo;
    return (
                 <li key={id} className="list-group-item " >
                        <div className="row row-li p-3">
                            <div className="col-8">
                                <p 
                                    className={ `${ done && 'complete text-left' }` }
                                    onClick={ () => handleToggle(id) }
                                > 
                                    {index + 1}. { desc }  
                                </p>

                            </div>
                            <div className="col-4 ">
                                <button 
                                    onClick={ () => handleDelete( id ) } 
                                    className="btn btn-outline-danger d-flex justify-content-end"
                                >   
                                    Borrar 
                                </button>

                            </div>
                        </div>
                        
                 </li>
            )
    
}

export default TodoListItem
