import './Signup.css'
import React, { useState } from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'

import {useSpring, animated} from 'react-spring'

export default function Signup() {

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

    const signup = ()=> console.log('Signup');

    return (
        <div className="sign-up-page">
            <div className="sign-up-container">
                <div className="sign-up-wrapper">

                    <div className="breadcrumb-container step-1">

                        <animated.div style={step1}>
                            <div className="breadcrumb-step">
                                <p className="breadcrumb-text">User details</p>
                                <div className="breadcrumb-circle">1</div>
                            </div>
                        </animated.div>
                        
                        <animated.div style={connectorStep1}>
                            <hr className="breadcrumb-spacer"/>
                        </animated.div>

                        <animated.div style={step2}>
                            <div className="breadcrumb-step">
                                <p className="breadcrumb-text">Payment method</p>
                                <div className="breadcrumb-circle">2</div>
                            </div>
                        </animated.div>
                        
                        <animated.div style={connectorStep2}>
                            <hr className="breadcrumb-spacer"/>
                        </animated.div>
                        
                        <animated.div style={step3}>
                            <div className="breadcrumb-step">
                                <p className="breadcrumb-text">Review</p>
                                <div className="breadcrumb-circle">3</div>
                            </div>
                        </animated.div>
                        
                    </div>

                    <div className="sign-up-form-wrapper">
                        
                        <div  id="slide-1">
                            <InputCard header="sign up" button="next" action={signup}>
                                <Input type="text" name="first-name" id="sign-up-first-name" placeholder="First name"/>
                                <Input type="text" name="last-name" id="sign-up-last-name" placeholder="Last name"/>
                                <Input type="email" name="email" id="sign-up-email" placeholder="Email"/>
                                <Input type="password" name="password" id="sign-up-password" placeholder="Password"/>
                            </InputCard>
                        </div>

                        <div  id="slide-2">
                            <InputCard header="payment method" button="next" action={signup}>
                                <Input type="text" name="cc-name" id="sign-up-cc-name" placeholder="Name on credit card"/>
                                <Input type="number" name="cc-number" id="sign-up-cc-number" minLength="16" maxLength="16" placeholder="0000-0000-0000-0000"/>
                                <Input type="text" name="cc-expiry" id="sign-up-cc-expiry" minLength="7" maxLength="7" placeholder="mm/yyyy"/>
                                <Input type="number" name="cc-security-code" id="sign-up-cc-security-code" minLength="3" maxLength="3" placeholder="000"/>
                            </InputCard>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
