import './Input.css'
import React, { useState } from 'react'
import Hint from '../Hint/Hint'

export default function Input(props) {

    const { type, name, id, placeholder, minLength, maxLength, autoComplete, action, error, errorMessage, useHint, hintText } = props;

    const [hint, setHint] = useState(false);

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
                onChange={(e)=> {
                    action(e);
                    setHint(false);
                }}
                onFocus={()=> useHint === true ? setHint(true) : null}
                onBlur={()=> useHint === true ? setHint(false) : null}
            />
            { errorMessage ? <p className="input-error-message">{errorMessage}</p> : null }

            <Hint toggle={hint}>
                {hintText}
            </Hint>

        </div>
    )
}
