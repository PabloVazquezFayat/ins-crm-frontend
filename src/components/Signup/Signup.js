import './Signup.css'
import React, { useState } from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'
import InputReview from '../InputReview/InputReview'

import { useSelector, useDispatch } from 'react-redux'

import {useSpring, animated} from 'react-spring'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

export default function Signup() {   

    const dispatch = useDispatch();

    const [cardOffset, setCardOffset] = useState("0px");
    const [cardOpacity, setCardOpacity] = useState({card1: 1, card2: 0, card3: 0});

    //animates the carousel on first load
    const cardCarousel = useSpring({
        opacity: 1, 
        transform: "translate(0px, 0px)",
        from: {opacity: 0, transform: "translate(0px, 360px)"},
        delay: 1600,
        config: {duration: 300}
    })

    //animates the deck on interactions
    const cardDeck = useSpring({transform: `translate(0px, ${cardOffset})`});

    //toggles the opacity of the each card based on interactions 
    const toggleCard1 = useSpring({opacity: cardOpacity.card1});
    const toggleCard2 = useSpring({opacity: cardOpacity.card2});
    const toggleCard3 = useSpring({opacity: cardOpacity.card3});

    //updates the toggle state of each card
    const gotToCard = (index, offset)=> {
        setCardOffset(offset); 
        if(index === 1){
            setCardOpacity({card1: 1, card2: 0, card3: 0});
        }else if(index === 2){
            setCardOpacity({card1: 0, card2: 1, card3: 0});
        }else if(index === 3){
            setCardOpacity({card1: 0, card2: 0, card3: 1});
        }
    }

    const   {newUserInput: 
                {newUserData: {
                        firstName,
                        lastName,
                        email,
                        password,
                        ccName,
                        cc,
                        expiry,
                        securityCode
                    }
                }
            } = useSelector(state => state);
    
    const validateCard = (cardNumber, cb)=> {

        if(cardNumber === 1 && firstName && lastName && email && password){
            console.log('Card 1 Valid');
            cb();
            return;
        }

        if(cardNumber === 2 && ccName && cc && expiry && securityCode){
            console.log('Card 2 Valid');
            cb();
            return;
        }

    }

    const submit = ()=> console.log('Submit');

    return (
        <div className="sign-up-page">
            <div className="sign-up-container">
                <div className="sign-up-wrapper">

                    <BreadCrumb 
                        steps={{
                            step_1:{
                                text: 'Account details',
                                number: '1',
                                action: ()=> gotToCard(1, '0px')
                            },
                            step_2:{
                                text: 'Payment method',
                                number: '2',
                                action: ()=> gotToCard(2, '-320px')
                            },
                            step_3:{
                                text: 'Review & submit',
                                number: '3',
                                action: ()=> gotToCard(3, '-640px'),
                            }
                        }}
                    />

                    <animated.div style={cardCarousel} className="sign-up-form-wrapper">

                        <animated.div style={cardDeck}>

                            <animated.form style={toggleCard1}>
                                <InputCard header="account details" button="next" action={(e)=> {
                                    e.preventDefault();
                                    validateCard(1, ()=> gotToCard(2, '-320px'));
                                }}>
                                    <Input type="text" name="first-name" id="sign-up-first-name" placeholder="First name" action={(e)=> dispatch({type: "NEW_USER_FIRST_NAME", payload: e.target.value})}/>
                                    <Input type="text" name="last-name" id="sign-up-last-name" placeholder="Last name" action={(e)=> dispatch({type: "NEW_USER_LAST_NAME", payload: e.target.value})}/>
                                    <Input type="email" name="email" id="sign-up-email" placeholder="Email" autoComplete="off"  action={(e)=> dispatch({type: "NEW_USER_EMAIL", payload: e.target.value})}/>
                                    <Input type="password" name="password" id="sign-up-password" placeholder="Password" autoComplete="new-password" action={(e)=> dispatch({type: "NEW_USER_PASSWORD", payload: e.target.value})}/>
                                </InputCard>
                            </animated.form>

                            <animated.form style={toggleCard2}>
                                <InputCard header="payment method" button="next" action={(e)=> {
                                    e.preventDefault();
                                    validateCard(2, ()=> gotToCard(3, '-640px'));
                                }}>
                                    <Input type="text" name="cc-name" id="sign-up-cc-name" placeholder="Name on credit card" action={(e)=> dispatch({type: "NEW_USER_CC_NAME", payload: e.target.value})}/>
                                    <Input type="number" name="cc-number" id="sign-up-cc-number" minLength="16" maxLength="16" placeholder="0000-0000-0000-0000" action={(e)=> dispatch({type: "NEW_USER_CC_NUMBER", payload: e.target.value})}/>
                                    <Input type="text" name="cc-expiry" id="sign-up-cc-expiry" minLength="7" maxLength="7" placeholder="mm/yyyy" action={(e)=> dispatch({type: "NEW_USER_CC_EXPIRY", payload: e.target.value})}/>
                                    <Input type="number" name="cc-security-code" id="sign-up-cc-security-code" minLength="3" maxLength="3" placeholder="000" action={(e)=> dispatch({type: "NEW_USER_CC_SECCODE", payload: e.target.value})}/>
                                </InputCard>
                            </animated.form> 

                            <animated.form style={toggleCard3}>
                                <InputCard header="review & submit" button="submit" action={(e)=> {
                                    e.preventDefault();
                                    submit();
                                }}>
                                    <h3 className='input-label'>Account Details</h3>
                                    <InputReview label={'First name:'}>{firstName}</InputReview>
                                    <InputReview label={'Last name:'}>{lastName}</InputReview>
                                    <InputReview label={'Email:'}>{email}</InputReview>
                                    <div className='spacer'></div>
                                    <h3 className='input-label'>Payment Method</h3>
                                    <InputReview label={'Name:'}>{ccName}</InputReview>
                                    <InputReview label={'Number:'}>{cc}</InputReview>
                                    <InputReview label={'Expires:'}>{expiry}</InputReview>
                                    <InputReview label={'Security code:'}>{securityCode}</InputReview>
                                </InputCard>
                            </animated.form>

                        </animated.div>

                    </animated.div>

                </div>
            </div>
        </div>
    )
}
