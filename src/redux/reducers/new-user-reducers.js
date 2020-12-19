import { initialState } from '../initialState/initialState';
import { actions } from '../actions/actions';

const {
    NEW_USER_FIRST_NAME,
    NEW_USER_LAST_NAME,
    NEW_USER_EMAIL,
    NEW_USER_PASSWORD,
    NEW_USER_CC_NAME,
    NEW_USER_CC_NUMBER,
    NEW_USER_CC_EXPIRY,
    NEW_USER_CC_SECCODE
} = actions;

function newUserInput(state = initialState, action){
    console.log(action.type)

    if(action.type === NEW_USER_FIRST_NAME){
        const newState = {...state};
        newState.newUserData.lastName = action.payload;
        console.log(newState);
        return newState;
    }

    return state;

    // switch(action.type){
    //     case NEW_USER_FIRST_NAME : 
    //         return {...state, firstName: action.payload};
    //     case NEW_USER_LAST_NAME :
    //         return {...state, lastName: action.payload};
    //     case NEW_USER_EMAIL :
    //         return {...state, email: action.payload};
    //     case NEW_USER_PASSWORD :
    //         return {...state, password: action.payload};
    //     case NEW_USER_CC_NAME :
    //         return {...state, ccName: action.payload};
    //     case NEW_USER_CC_NUMBER :
    //         return {...state, cc: action.paylod};
    //     case NEW_USER_CC_EXPIRY :
    //         return {...state, expiry: action.payload};
    //     case NEW_USER_CC_SECCODE :
    //         return {...state, securityCode: action.payload};
    //     default :
    //         return state;
    // }

}

export { newUserInput }