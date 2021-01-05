import './InputError.css'
import React, { useState, useEffect } from 'react'
import { Transition } from 'react-spring/renderprops'
import CloseIcon from '@material-ui/icons/Close'

export default function InputError(props) {

    const { errors } = props;

    const [errorFlags, setErrorFlags] = useState([]);

    const clearError = (error)=> {
        const filtered = errorFlags.filter( errorMessage => {
            return errorMessage !== error;
        });
        setErrorFlags(filtered);
    }

    useEffect(()=> {
        if(errors.length > 0){
            setErrorFlags(errors);
        }else{
            setErrorFlags([]);
        }
    }, [setErrorFlags, errors]);

    return (
        <Transition items={errorFlags} key={item => item.key} from={{ opacity: 0 }} enter={{ opacity: 1 }} leave={{ opacity: 0 }} trail={100} >
            {(item)=> {
                return (props)=>{
                    return  <div style={props} className="input-error-container drop-shadow">
                                <p>{item}</p>
                                <CloseIcon className="input-close-btn" onClick={ ()=> clearError(item) }/>
                            </div>
                }
            }}
        </Transition>
    )
}
