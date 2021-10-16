import React, { useEffect } from 'react'

const Message = () => {

    useEffect(() => {
        console.log('componente Montado')
        return () => {
            console.log('componente Desmontado')
            
        }
    }, [])

    return (
        <div className="mt-4">
            <h3>Hola Mensaje</h3>
        </div>
    )
}

export default Message
