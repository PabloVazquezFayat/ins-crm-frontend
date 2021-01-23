import './InputReview.css'
import React, { useEffect } from 'react'

export default function InputReview(props) {

    const {label, error, onError, children} = props;

    useEffect(()=> {
        if(error === true){
            onError();
        }
    }, [error, onError]);

    return (
        <div className='input-review-wrapper'>
            <label className='input-review-label'>{label}</label>
            <p className='input-review'>{children}</p>
        </div>
    )
}

