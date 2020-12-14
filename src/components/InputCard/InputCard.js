import './InputCard.css'
import React from 'react'

export default function InputCard(props) {

    const { header, button, action } = props;

    return (
        <div className="input-card-container">   

            <div className="input-card-body">

                <h2>{header}</h2>

                <div className="input-card-content">
                    {props.children}  
                </div>

            </div>

            <div className="input-card-button-container">
                <button onClick={(e)=> action(e)}>{button}</button>
            </div>

        </div>
    )
}
