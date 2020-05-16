import React from 'react'

const Button = props => {
    const { text, text2, input } = props
    return (
        <div>
            <button type="button">{props.text}</button>
            <button type="button">{text}</button>
        </div>
    )
}

export default Button;