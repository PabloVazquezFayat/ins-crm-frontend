import './InputError.css'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import CloseIcon from '@material-ui/icons/Close';

export default function InputError(props) {

    const { error } = props;
    const [opacity, setOpacity] = useState(0);
    const toggleError = useSpring({opacity: opacity});

    useEffect(()=>{
        if(error){
            setOpacity(1);
        }
    }, [setOpacity, error]);

    return (
        <animated.div style={toggleError} className="input-error-container drop-shadow">
            <p>{error.message ? error.message : 'an error has occurred'}</p>
            <CloseIcon className="input-close-btn" onClick={()=> setOpacity(0)} />
        </animated.div>
    )
}
