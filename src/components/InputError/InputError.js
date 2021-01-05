import './InputError.css'
import React, { useState, useEffect } from 'react'
import { useSpring, animated } from 'react-spring'
import CloseIcon from '@material-ui/icons/Close'

export default function InputError(props) {

    const { error, setError } = props;
    const [visibility, setVisibility] = useState({opacity: 1, display: 'flex'});
    const toggleError = useSpring({opacity: visibility.opacity, display: visibility.display});

    function clearErrors() {
        setVisibility({opacity: 0, display: 'none'});
        setTimeout(() => {
            setError('');
        }, 300);
    }

    useEffect(() => {
        setVisibility({opacity: 1, display: 'flex'});
    }, [setVisibility])    

    return (
        <animated.div style={toggleError} className="input-error-container drop-shadow">
            <p>{error ? error : 'an error has occured'}</p>
            <CloseIcon className="input-close-btn" onClick={clearErrors} />
        </animated.div>
    )
}
