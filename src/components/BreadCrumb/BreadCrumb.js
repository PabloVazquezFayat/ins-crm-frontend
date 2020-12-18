import './BreadCrumb.css'
import React from 'react'
import {useSpring, animated} from 'react-spring'

export default function BreadCrumb(props) {

    const {steps: {step_1, step_2, step_3}} = props

    const fadeIn = (settings)=> {
        const {duration, delay} = settings;
        return {
            opacity: 1, 
            transform: "translate(0px, 0px)",
            from: {opacity: 0, transform: "translate(-20px, 0px)" },
            delay: delay,
            config: {duration: duration}
        }
    }

    const expandDown = (settings)=> {
        const {duration, delay} = settings;
        return {
            height: "70px",
            overflow: "hidden",
            opacity: 1,
            from: {opacity: 0,  height: "0px", overflow: "hidden"}, 
            delay: delay,
            config: {duration: duration}
        }
    }

    const step1 = useSpring(fadeIn({duration: 200, delay: 0}));
    const step2 = useSpring(fadeIn({duration: 200, delay: 200}));
    const step3 = useSpring(fadeIn({duration: 200, delay: 400}));

    const connectorStep1 = useSpring(expandDown({duration: 200, delay: 800}));
    const connectorStep2 = useSpring(expandDown({duration: 200, delay: 1100}));

    return (
        <div className="breadcrumb-container step-1">
            <animated.div style={step1}>
                <div className="breadcrumb-step">
                    <p className="breadcrumb-text">{step_1.text}</p>
                    <div className="breadcrumb-circle" onClick={step_1.action}>{step_1.number}</div>
                </div>
            </animated.div>
            
            <animated.div style={connectorStep1}>
                <hr className="breadcrumb-spacer"/>
            </animated.div>

            <animated.div style={step2}>
                <div className="breadcrumb-step">
                    <p className="breadcrumb-text">{step_2.text}</p>
                    <div className="breadcrumb-circle" onClick={step_2.action}>{step_2.number}</div>
                </div>
            </animated.div>
            
            <animated.div style={connectorStep2}>
                <hr className="breadcrumb-spacer"/>
            </animated.div>
            
            <animated.div style={step3}>
                <div className="breadcrumb-step">
                    <p className="breadcrumb-text">{step_3.text}</p>
                    <div className="breadcrumb-circle" onClick={step_3.action}>{step_3.number}</div>
                </div>
            </animated.div>
        </div>
    )
}
