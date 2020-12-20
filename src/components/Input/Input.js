import './Input.css'
import React from 'react'

export default function Input(props) {

    const { type, name, id, placeholder, minLength, maxLength, autoComplete, action } = props;

    return (
        <div className="input-wrapper">
            <input 
                className="input" 
                type={type ? type : "text"} 
                name={name ? name : ""}
                id={id ? id : ""} 
                placeholder={ placeholder ? placeholder : ""}
                minLength={ minLength ? minLength : null}
                maxLength={ maxLength ? maxLength : null}
                autoComplete={ autoComplete ? autoComplete : "off"}
                onChange={action}
            />
        </div>
    )
}
