import React, { useEffect, useState } from 'react';
import Message from './Message';
import './useEffect.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // con useEffect puedo escuchar cambios especificos, segun que le pase en la dependencia.

    useEffect ( () => {

        // console.log('hey!!')
    }, [])
    
    useEffect ( () => {

        // console.log('formState Cambio')
    }, [formState])
    
    useEffect ( () => {

        // console.log('email Cambio')
    }, [email])

    const handleOnChange = ({target}) =>{
        
        setFormState({
            ...formState,
            [ target.name ]: target.value 
        })
    }
    
    return (
        <>
            <h1>SimpleForm UseEffect</h1>
            <hr/>

            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Tu Nombre"
                    autoComplete="off"
                    value= {name}
                    onChange= { handleOnChange }
                />

            </div>

            <div className="form-group">
                <input
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="tuemail@email.com"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleOnChange }
                />

            </div>
            { (name === 'Mauri') && <Message />}
        </>
    )
}

export default SimpleForm
