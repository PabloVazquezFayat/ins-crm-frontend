import { initialState } from '../initialState/initialState';
import { actions } from '../actions/actions';

const { CREATE_ACCOUNT, READ_ACCOUNT } = actions.dataActions;

function accountActions(state = initialState, action){

    const newState = {...state};

    switch(action.type){
        case CREATE_ACCOUNT :
            newState.accountData = action.payload;
            return newState;
        case READ_ACCOUNT : 
            newState.accountData = action.payload;
            return newState;
        default: 
            return state;
    }

}

export { accountActions };