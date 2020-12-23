import { actions } from '../actions/actions';

const { SET_ACCOUNT } = actions.accountActions;

const initialState = {
    userData: {}
}

function accountActions(state = initialState, action){

    if(action.type === SET_ACCOUNT){
        return {userData: action.payload}
    }

    return state;

}

export { accountActions };