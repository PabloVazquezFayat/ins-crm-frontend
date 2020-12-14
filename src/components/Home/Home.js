import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input';

export default function Home() {

    const login = async  (e)=> {
        console.log('Login');
    }

    return (
        <div className="home-page">
            <div className="signup-login-container">
                <InputCard header="login" button="login" action={login}>
                    <Input type="email" name="email" id="email-input" placeholder="Email"/>
                    <Input type="password" name="password" id="password-input" placeholder="Password"/>
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
