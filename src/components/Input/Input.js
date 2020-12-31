import './Input.css'
import React from 'react'

export default function Input(props) {

    const { type, name, id, placeholder, minLength, maxLength, autoComplete, action, error, errorMessage } = props;

    return (
        <div className="input-wrapper" >
            <input 
                className={ error ? 'input-error' : 'input'}
                type={type ? type : "text"} 
                name={name ? name : ""}
                id={id ? id : ""} 
                placeholder={ placeholder ? placeholder : ""}
                minLength={ minLength ? minLength : null}
                maxLength={ maxLength ? maxLength : null}
                autoComplete={ autoComplete ? autoComplete : "off"}
                onChange={action}
            />
            { errorMessage ? <p className="input-error-message">{errorMessage}</p> : null }
        </div>
    )
}
