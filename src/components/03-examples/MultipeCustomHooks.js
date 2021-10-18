import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './multipleCustomHooks.css'

const MultipeCustomHooks = () => {

    const state = useFetch( 'https://www.breakingbadapi.com/api/quotes/1' );
    console.log(state);
    const { data } = state
    console.log(data[0].quote)
    const { quote, author } = data[0];

    return (
        <div>
            <h1> { author }</h1>
            <p> { quote } </p>
            
        </div>
    )
}

export default MultipeCustomHooks
