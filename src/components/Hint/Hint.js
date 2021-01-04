import './Hint.css'
import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'

export default function Hint(props) {

    const { toggle } = props;

    const [opacity, setOpacity] = useState(0);
    const [display, setDisplay] = useState('none');
    const toggleHint = useSpring({opacity: opacity, display: display});

    useEffect(()=> {
        if(toggle === true){
            setOpacity(1);
            setDisplay('block');
        }else if(toggle === false){
            setOpacity(0);
            setDisplay('none');
        }
    }, [setOpacity, setDisplay, toggle]);
    
    return (
        <animated.div style={toggleHint} className="hint drop-shadow">
            <div className="hint-arrow"></div>
            <p>
                {props.children}
            </p>
        </animated.div>
    )
}
