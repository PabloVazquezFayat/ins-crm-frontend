import './InputReview.css'
import React, { useEffect } from 'react'

export default function InputReview(props) {

    const {label, error, errorType, children} = props;

    useEffect(()=> {
        if(error){
            console.log(error, error.length);
            console.log(children);
        }
    }, [error, children]);

    return (
        <div className='input-review-wrapper'>
           {label ? <label className='input-review-label'>{label}</label> : null}
           { error && error.length === 0 
             ? <p className='input-review'>{children}</p> : <input className='input-review' type={errorType} /> }
        </div>
    )
}

