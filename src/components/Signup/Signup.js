import './Signup.css'
import React, { useState } from 'react'
import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'

import {useSpring, animated} from 'react-spring'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

export default function Signup() {    

    const [card, setCard] = useState("0px");
    const [card1, setCard1] = useState(1);
    const [card2, setCard2] = useState(0);
    const [card3, setCard3] = useState(0);

    const fistCard = useSpring({
        opacity: 1, 
        transform: "translate(0px, 0px)",
        from: {opacity: 0, transform: "translate(0px, 360px)"},
        delay: 1600,
        config: {duration: 300}
    })

    const cardDeck = useSpring({transform: `translate(0px, ${card})`});

    const toggleCard1 = useSpring({opacity: card1});
    const toggleCard2 = useSpring({opacity: card2});
    const toggleCard3 = useSpring({opacity: card3});

    const next = ()=> console.log('next')

    const gotToCard = (index, offset)=> {
        setCard(offset); 
        if(index === 1){
            setCard1(1);
            setCard2(0);
            setCard3(0);
        }else if(index === 2){
            setCard1(0);
            setCard2(1);
            setCard3(0);
        }else if(index === 3){
            setCard1(0);
            setCard2(0);
            setCard3(1);
        }
    }

    return (
        <div className="sign-up-page">
            <div className="sign-up-container">
                <div className="sign-up-wrapper">

                    <BreadCrumb 
                        steps={{
                            step_1:{
                                text: 'User details',
                                number: '1',
                                action: ()=> gotToCard(1, '0px')
                            },
                            step_2:{
                                text: 'Payment method',
                                number: '2',
                                action: ()=> gotToCard(2, '-320px')
                            },
                            step_3:{
                                text: 'Review',
                                number: '1',
                                action: ()=> gotToCard(3, '-640px'),
                            }
                        }}
                    />

                    <animated.div style={fistCard} className="sign-up-form-wrapper">
                        <animated.div style={cardDeck}>
                            <animated.div style={toggleCard1}>
                                <InputCard header="sign up" button="next" action={()=> gotToCard(1, '0px')}>
                                    <Input type="text" name="first-name" id="sign-up-first-name" placeholder="First name"/>
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
