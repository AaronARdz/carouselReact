import React from 'react'

const HolaMundo = () => {

    const Hello = '!holamundo!'
    const isTrue = true

    return(
        <div className="holamundo">
            <h1>{Hello}</h1>
            <h2>Curso Esencial de React</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>Es verdadero</h4> : <h5>im Fake</h5>}
            {isTrue && <h4>Soy verdadero</h4>}
        </div>
    )
}

export default HolaMundo;