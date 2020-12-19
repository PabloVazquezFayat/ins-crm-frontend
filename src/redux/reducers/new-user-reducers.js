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
} = actions.newUserActions;

function newUserInput(state = initialState, action){

    const newState = {...state};

    switch(action.type){
        case NEW_USER_FIRST_NAME : 
            newState.newUserData.firstName = action.payload;
            return newState;
        case NEW_USER_LAST_NAME :
            newState.newUserData.lastName = action.payload;
            return newState;
        case NEW_USER_EMAIL :
            newState.newUserData.email = action.payload;
            return newState;
        case NEW_USER_PASSWORD :
            newState.newUserData.password = action.payload;
            return newState;
        case NEW_USER_CC_NAME :
            newState.newUserData.ccName = action.payload;
            return newState;
        case NEW_USER_CC_NUMBER :
            newState.newUserData.cc = action.payload;
            return newState;
        case NEW_USER_CC_EXPIRY :
            newState.newUserData.expiry = action.payload;
            return newState;
        case NEW_USER_CC_SECCODE :
            newState.newUserData.securityCode = action.payload;
            return newState;
        default :
            return state;
    }

}

export { newUserInput }