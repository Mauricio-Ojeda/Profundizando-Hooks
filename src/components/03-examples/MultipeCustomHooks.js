import React from 'react'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'


import './multipleCustomHooks.css'

const MultipeCustomHooks = () => {

    const { counter, increment } = useCounter(1)

    const { loading, data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter }` );
    console.log(data);

    const { author, quote } = !!data && data[0];
   
   

    return (
        <>
            <h1>Braiking Bad Quotes</h1>
            { loading ? <div className="alert alert-info text-center">
                             Loading...
                        </div> 
                      :
                      (
                        <div>
                            <blockquote className="blockquote text-end">
                                <p className="mb-3">
                                    { quote }
                                </p>
                                <footer className="blockquote-footer">
                                    { author }
                                </footer>


                            </blockquote>
                            <button className="btn btn-primary text-start" onClick={ increment }>
                                siguiente quote
                            </button>
                        </div>
                        )
            }
            
            
            
        </>
    )
}

export default MultipeCustomHooks
