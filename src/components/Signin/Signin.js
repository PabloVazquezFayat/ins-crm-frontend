import './Signin.css'
import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'
import InputError from '../InputError/InputError'

export default function Home() {

    const dispatch = useDispatch();
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState([]);

    const signin = async  ()=> {

        if(!email || !password){
            return setError(['please enter your email and password']);;
        }

        const res = await fetchData.user.login({email: email, password: password});

        if(res.auth === undefined){
            dispatch({type: 'AUTH_USER', payload: res});
            history.push('/dash');
        }else{
            setError([res.message]);
        }
    }

    return (
        <div className="sigin-page">
            <InputError errors={error}/>
            <div className="signup-login-container">
                <InputCard header="login" button="login" action={signin}>
                    <Input 
                        type="email" 
                        name="email" 
                        id="email-input" 
                        placeholder="Email" 
                        action={(e)=> setEmail(e.target.value)}
                        error={error[0] ? error[0] : null}
                    />
                    <Input 
                        type="password" 
                        name="password" 
                        id="password-input" 
                        placeholder="Password" 
                        action={(e)=> setPassword(e.target.value)}
                        error={error[0] ? error[0] : null}
                    />
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
