import React, { useContext } from 'react'
import { UserContext } from './UserContext'

const HomeScreen = () => {
    
    const userContext = useContext(UserContext);
    const {id, name, surname} = userContext;
    console.log(userContext)

    return (
        <div>
            <h1>HomeScreen</h1>
            <hr />
            <ul>
                <li>{ id }</li>
                <li>{ name }</li>
                <li>{ surname }</li>
            </ul>
        </div>
    )
}

export default HomeScreen
