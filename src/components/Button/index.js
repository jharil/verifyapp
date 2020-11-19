import React from 'react'
import './index.scss'

const Button = (props) => {
    return <button 
        className="buttonComponent" 
        {...props}>
        {props.text}
    </button>;
}
 
export default Button;