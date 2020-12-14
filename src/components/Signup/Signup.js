import React from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'

export default function Signup() {

    const signup = async (e)=> {
        console.log('Signup');
    }

    return (
        <div>
            <InputCard header="sign up" button="next" action={signup}>
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
    )
}
