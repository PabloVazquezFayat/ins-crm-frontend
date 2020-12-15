import './InputCard.css'
import React from 'react'

function InputCard(props, ref) {

    const { header, button, action } = props;

    return (
        <div className="input-card-container" ref={ref}>   

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

export default React.forwardRef(InputCard);
