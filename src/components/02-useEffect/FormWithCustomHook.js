import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';

import './useEffect.css';

const FormWithCustomHook= () => {

    const [formValues, handleInputChange] = useForm({ 
        name: '',
        email: '',
        password:''
    });

    
    const { name, email, password } = formValues;
    
    useEffect(() => {
        console.log('email cambio')        
    }, [email])

    const handleSubmit = ( e ) => {
        e.preventDefault()
        console.log({formValues});
    }
    
    
    return (
        <>
            <form onSubmit={ handleSubmit }>
                <h1>FormWithCustomHook</h1>
                <hr/>

                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control mb-3"
                        placeholder="Tu Nombre"
                        autoComplete="off"
                        value= {name}
                        onChange= { handleInputChange }
                    />

                </div>

                <div className="form-group">
                    <input
                        type="text"
                        name="email"
                        className="form-control mb-3"
                        placeholder="tuemail@email.com"
                        autoComplete="off"
                        value= { email }
                        onChange= { handleInputChange }
                    />

                </div>
                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="*******"
                        value= { password }
                        onChange= { handleInputChange }
                    />

                </div>
                <button type="submit" className="btn btn-outline-dark mt-3"> Enviar </button>
            </form>
        </>
    )
}

export default FormWithCustomHook
