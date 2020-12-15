import './Signup.css'
import React, { useRef, useEffect, useState} from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'

export default function Signup() {

    const signup = ()=> console.log('Signup');
    const [sliderHeight, setSliderHeight] = useState("");
    const sliderHeightRef = useRef(null);

    useEffect(()=> {
        setSliderHeight(sliderHeightRef.current.clientHeight + 30 + "px");
    },[setSliderHeight, sliderHeightRef]);

    return (
        <div className="sign-up-page">
            <div className="sign-up-container">
                <div className="sign-up-wrapper">

                    <div className="breadcrumb-container">

                        <div className="breadcrumb-step">
                            <p className="breadcrumb-text">User details</p>
                            <div className="breadcrumb-circle">1</div>
                        </div>

                        <hr className="breadcrumb-spacer"/>

                        <div className="breadcrumb-step">
                            <p className="breadcrumb-text">Payment method</p>
                            <div className="breadcrumb-circle">2</div>
                        </div>

                        <hr className="breadcrumb-spacer"/>

                        <div className="breadcrumb-step">
                            <p className="breadcrumb-text">Review</p>
                            <div className="breadcrumb-circle">3</div>
                        </div>

                    </div>

                    <div className="sign-up-form-wrapper" style={{height: sliderHeight}}>
                        
                        <div className="sign-up-form-slider" sliding={0}>
                            <InputCard header="sign up" button="next" action={signup} ref={sliderHeightRef}>
                                <Input type="text" name="first-name" id="sign-up-first-name" placeholder="First name"/>
                                <Input type="text" name="last-name" id="sign-up-last-name" placeholder="Last name"/>
                                <Input type="email" name="email" id="sign-up-email" placeholder="Email"/>
                                <Input type="password" name="password" id="sign-up-password" placeholder="Password"/>
                            </InputCard>

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
