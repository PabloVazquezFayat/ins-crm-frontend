import './Signup.css'
import React, { useState } from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'

import { useSelector, useDispatch } from 'react-redux'

import {useSpring, animated} from 'react-spring'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

export default function Signup() {   
    
    const {newUserInput: {newUserData}} = useSelector(state => state);
    console.log(newUserData);

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

    const next = ()=> console.log('next')

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

                            <animated.div style={toggleCard1}>
                                <InputCard header="sign up" button="next" action={()=> gotToCard(1, '0px')}>
                                    <Input type="text" name="first-name" id="sign-up-first-name" placeholder="First name" action={(e)=> dispatch({type: "NEW_USER_FIRST_NAME", payload: e.target.value})}/>
                                    <Input type="text" name="last-name" id="sign-up-last-name" placeholder="Last name"/>
                                    <Input type="email" name="email" id="sign-up-email" placeholder="Email"/>
                                    <Input type="password" name="password" id="sign-up-password" placeholder="Password"/>
                                </InputCard>
                            </animated.div>

                            <animated.div style={toggleCard2}>
                                <InputCard header="payment method" button="next" action={()=> gotToCard(2, '-320px')}>
                                    <Input type="text" name="cc-name" id="sign-up-cc-name" placeholder="Name on credit card"/>
                                    <Input type="number" name="cc-number" id="sign-up-cc-number" minLength="16" maxLength="16" placeholder="0000-0000-0000-0000"/>
                                    <Input type="text" name="cc-expiry" id="sign-up-cc-expiry" minLength="7" maxLength="7" placeholder="mm/yyyy"/>
                                    <Input type="number" name="cc-security-code" id="sign-up-cc-security-code" minLength="3" maxLength="3" placeholder="000"/>
                                </InputCard>
                            </animated.div> 

                            <animated.div style={toggleCard3}>
                                <InputCard header="payment method" button="submit" action={next}>
                                    REVIEW
                                </InputCard>
                            </animated.div>

                        </animated.div>

                    </animated.div>

                </div>
            </div>
        </div>
    )
}
