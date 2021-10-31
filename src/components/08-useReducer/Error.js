import React from 'react'

const Error = ( { mensaje } ) => {
    return (
        <h4 className="bg-danger text-light p-4 "> { mensaje } </h4>
    )
}

export default Error
