import './Signup.css'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring'
import { useSelector, useDispatch } from 'react-redux'

import InputCard from '../InputCard/InputCard'
import Input from '../Input/Input'
import InputReview from '../InputReview/InputReview'
import InputError from '../InputError/InputError'
import BreadCrumb from '../BreadCrumb/BreadCrumb'

import { fetchData }  from '../../utility/API/fetch-data'
import { Auth } from '../../utility/Auth/Auth'

export default function Signup() { 
    
    const history = useHistory();

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

    //redux dispatch action hook
    const dispatch = useDispatch();

    //redux state selector hook
    const   {newUserInput: 
                {newUserData: 
                    { firstName, lastName, email, password, ccName, cc, expiry, securityCode }
                }
            } = useSelector(state => state);

    const [errors, setErrors] = useState({card1: {}, card2: {}});
    const [errorMessages, setErrorMessages] = useState([]);
    
    const validateCard1 = (cb, onError)=> {

        const errorMessagesCard1 = [];

        const validateFirstName = ()=> firstName.length === 0 ? false : true;
        const validateLastName = ()=> lastName.length === 0 ? false : true;
        const validateEmail = ()=> email.match(/(\w+?@\w+?\x2E.+)/) ? true : false;
        const validatePassword = ()=> password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{5,}$/) ? true : false;

        if(validateFirstName() === false){
            errorMessagesCard1.push('Invalid fist name');
        }

        if(validateLastName() === false){
            errorMessagesCard1.push('Invalid last name');
        }

        if(validateEmail() === false){
            errorMessagesCard1.push('Invalid email address');
        }

        if(validatePassword() === false){
            errorMessagesCard1.push('Invalid password');
        }

        if(errorMessagesCard1.length > 0){
            onError();
            setErrorMessages(errorMessagesCard1.reverse());
        }else{
            cb();
            setErrorMessages([]);
        }

    }

    const validateCard2 = (cb, onError)=> {

        const errorMessagesCard2 = [];

        const validateCCname = ()=> ccName.length === 0 ? false : true;
        const validateCCnumber = ()=> parseInt(cc).toString().length < 16 ? false : true;
        const validateCCexpiry = ()=> {
            const expiryDetails = expiry.split('/');
            if(parseInt(expiryDetails[0]).toString().length < 2){
                return false;
            }else if(parseInt(expiryDetails[1]).toString().length < 4){
                return false;
            }else{
                return true;
            }
        }
        const validateCCsecCode = ()=> parseInt(securityCode).toString().length < 3 ? false : true;

        if(validateCCname() === false){
            errorMessagesCard2.push('Invalid credit card name');
        }

        if(validateCCnumber() === false){
            errorMessagesCard2.push('Invalid credit card number');
        }

        if(validateCCexpiry() === false){
            errorMessagesCard2.push('Invalid credit card expiration')
        }

        if(validateCCsecCode() === false){
            errorMessagesCard2.push('Invalid credit card security code');
        }

        if(errorMessagesCard2.length > 0){
            onError();
            setErrorMessages(errorMessagesCard2.reverse());
        }else{
            cb();
            setErrorMessages([]);
        }

    }

    const validationErrors = (cardNumber)=> {

        const card1 = {firstName, lastName, email, password};
        const card2 = {ccName, cc, expiry, securityCode};

        const createErrors = (card)=> {

            const cardErrors = {}

            for (const key in card) {
                if(!card[key]){
                    cardErrors[key] = true;
                }
            }

            return cardErrors;
        }

        if(cardNumber === 1){
            const cardErrors = createErrors(card1);
            const currentErrors = {...errors};
            currentErrors.card1 = cardErrors;
            setErrors(currentErrors);
        }else if(cardNumber === 2){
            const cardErrors = createErrors(card2);
            const currentErrors = {...errors};
            currentErrors.card2 = cardErrors;
            setErrors(currentErrors);

        }

    }

    const clearError = (cardNumber, prop)=> {
        if(cardNumber === 1){
            const currentErrors = {...errors};
            currentErrors.card1[prop] = false;
            setErrors(currentErrors);
        }
        if(cardNumber === 2){
            const currentErrors = {...errors};
            currentErrors.card2[prop] = false;
            setErrors(currentErrors);
        }

    }
    
    const submit = async ()=> {

        const accountData = {
            email: email,
            password: password,
            name: `${firstName} ${lastName}`,
            cc: {
                name: ccName,
                number: cc,
                expires: expiry,
                securityCode: securityCode
            }
        };

        const res = await fetchData.account.create(accountData);

        if(res && res.errors){
            const errors = res.errors.map((error)=> error['email']);
            return setErrorMessages(errors);
        }

        if(res && res.user){
            dispatch({type: 'SET_ACCOUNT', payload: res.user});
            dispatch({type: 'AUTH_USER', payload: res.user});
            Auth();
            history.push('/dash');
        }

    };

    return (
        <div className="sign-up-page">

            <div className="sign-up-errors-container">
                <InputError errors={errorMessages}/>
            </div>

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
                                    validateCard1(()=> gotToCard(2, '-320px'), ()=> validationErrors(1));
                                }}>
                                    <Input 
                                        type="text" 
                                        name="first-name" 
                                        id="sign-up-first-name" 
                                        placeholder="First name" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_FIRST_NAME", payload: e.target.value});
                                            clearError(1, 'firstName');
                                        }}
                                        error={errors.card1.firstName ? errors.card1.firstName : false}
                                    />
                                    <Input 
                                        type="text" 
                                        name="last-name" 
                                        id="sign-up-last-name" 
                                        placeholder="Last name" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_LAST_NAME", payload: e.target.value});
                                            clearError(1, 'lastName');
                                        }}
                                        error={errors.card1.lastName ? errors.card1.lastName : false}
                                    />
                                    <Input 
                                        type="email" 
                                        name="email" 
                                        id="sign-up-email" 
                                        placeholder="Email" 
                                        autoComplete="off"  
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_EMAIL", payload: e.target.value});
                                            clearError(1, 'email')
                                        }}
                                        error={errors.card1.email ? errors.card1.email : false}
                                    />
                                    <Input 
                                        type="password" 
                                        name="password" 
                                        id="sign-up-password" 
                                        placeholder="Password" 
                                        autoComplete="new-password" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_PASSWORD", payload: e.target.value});
                                            clearError(1, 'password');
                                        }}
                                        error={errors.card1.password ? errors.card1.password : false}
                                        useHint={true}
                                        hintText={`Passwords must be 5 characters or more,
                                         and contain numbers, symbols, and uppercase letters.`}
                                    />
                                </InputCard>
                            </animated.form>

                            <animated.form style={toggleCard2}>
                                <InputCard header="payment method" button="next" action={(e)=> {
                                    e.preventDefault();
                                    validateCard2(()=> gotToCard(3, '-640px'), ()=> validationErrors(2));
                                }}>
                                    <Input 
                                        type="text" 
                                        name="cc-name" 
                                        id="sign-up-cc-name" 
                                        placeholder="Name on credit card" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_CC_NAME", payload: e.target.value});
                                            clearError(2, 'ccName');
                                        }}
                                        error={errors.card2.ccName ? errors.card2.ccName : false}
                                    />
                                    <Input 
                                        type="number" 
                                        name="cc-number" 
                                        id="sign-up-cc-number" 
                                        minLength="16" maxLength="16" 
                                        placeholder="0000-0000-0000-0000" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_CC_NUMBER", payload: e.target.value});
                                            clearError(2, 'cc');
                                        }}
                                        error={errors.card2.cc ? errors.card2.cc : false}
                                    />
                                    <Input 
                                        type="text" 
                                        name="cc-expiry" 
                                        id="sign-up-cc-expiry" 
                                        minLength="7" 
                                        maxLength="7" 
                                        placeholder="mm/yyyy" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_CC_EXPIRY", payload: e.target.value});
                                            clearError(2, 'expiry');
                                        }}
                                        error={errors.card2.expiry ? errors.card2.expiry : false}
                                    />
                                    <Input 
                                        type="number" 
                                        name="cc-security-code" 
                                        id="sign-up-cc-security-code" 
                                        minLength="3" 
                                        maxLength="3" 
                                        placeholder="000" 
                                        action={(e)=> {
                                            dispatch({type: "NEW_USER_CC_SECCODE", payload: e.target.value});
                                            clearError(2, 'securityCode');
                                        }}
                                        error={errors.card2.securityCode ? errors.card2.securityCode : false}
                                    />
                                </InputCard>
                            </animated.form> 

                            <animated.form style={toggleCard3}>
                                <InputCard header="review &amp; submit" button="submit" action={(e)=> {
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
