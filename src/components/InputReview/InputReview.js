import './InputReview.css'
import React from 'react'

export default function InputReview(props) {

    const {label, children} = props;

    return (
        <div className='input-review-wrapper'>
           {label ?  <label className='input-review-label'>{label}</label> : null}
            <p className='input-review'>{children !== 0 ? children : ''}</p>
        </div>
    )
}
