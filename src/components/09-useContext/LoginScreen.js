import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    return (
        <div>
            <h1>Login Screen</h1>
            <hr />
            <button 
                className="btn btn-block btn-dark"
                onClick={ () => ( setUser({
                    id:7777,
                    name:'Mauricio'
                }) ) }
            >
                Login
            </button>
        </div>
    )
}

export default LoginScreen
