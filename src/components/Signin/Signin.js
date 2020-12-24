import './Signin.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input';

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = async  (e)=> {
        console.log(email, password);
    }

    return (
        <div className="home-page">
            <div className="signup-login-container">
                <InputCard header="login" button="login" action={signin}>
                    <Input type="email" name="email" id="email-input" placeholder="Email" action={(e)=> setEmail(e.target.value)}/>
                    <Input type="password" name="password" id="password-input" placeholder="Password" action={(e)=> setPassword(e.target.value)}/>
                    <div className="sign-up">
                        <p>Don't have an account?</p> 
                        <Link to="/signup" className="sing-up-link">Create account</Link>
                    </div>
                    <div className="rescue">
                        <Link to="/rescue" className="rescue-link">Forgot login</Link>
                    </div>
                </InputCard>
            </div>
        </div>
    )
}
