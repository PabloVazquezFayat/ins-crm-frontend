import './Signin.css'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input';

export default function Home() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const errorHandler = (error) =>{
        console.log(error);
    }

    const signin = async  (e)=> {

        const res = await fetchData.user.login({email: email, password: password});

        if(res.auth === undefined){
            dispatch({type: 'AUTH_USER', payload: res})
            history.push('/dash');
        }else{
            errorHandler(res);
        }
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
