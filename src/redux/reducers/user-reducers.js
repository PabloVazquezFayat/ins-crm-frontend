import { initialState } from '../initialState/initialState';
import { actions } from '../actions/actions';

const { CREATE_USER, READ_USER, UPDATE_USER, DELETE_USER, AUTH_USER } = actions.userActions;

function userActions(state = initialState, action){

    const newState = {...state};

    switch(action.type){
        case CREATE_USER :
            newState.userData = action.payload;
            return newState;
        case READ_USER : 
            newState.userData = action.payload;
            return newState;
        case UPDATE_USER :
            newState.userData = action.payload;
            return newState;
        case DELETE_USER :
            newState.userData = action.payload;
            return newState;
        case AUTH_USER :
            newState.userData = action.payload;
            return newState;
        default: 
            return state;
    }

}

export { userActions };