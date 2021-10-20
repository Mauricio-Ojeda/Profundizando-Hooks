import React from 'react'

const Small = React.memo (({ value }) => {

    //Solo es renderizado si el valor de las props cambia

    console.log('soy el componente Small')
    return (
        <small>
            { value }
        </small>
    )
}

)
export default Small
