import './InputError.css'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import CloseIcon from '@material-ui/icons/Close';

export default function InputError(props) {

    const { error, setError } = props;
    const [opacity, setOpacity] = useState(0);
    const [display, setDisplay] = useState('none');
    const toggleError = useSpring({opacity: opacity, display: display});

    const clearErrors = ()=>{
        setOpacity(0);
        setTimeout(()=> {
            setError('');
            setDisplay('none');
        }, 300) 
    };

    useEffect(()=>{
        if(error){
            setDisplay('flex');
            setOpacity(1);
        }
    }, [setOpacity, error]);

    return (
        <animated.div style={toggleError} className="input-error-container drop-shadow">
            <p>{error ? error : 'an error has occured'}</p>
            <CloseIcon className="input-close-btn" onClick={clearErrors} />
        </animated.div>
    )
}
