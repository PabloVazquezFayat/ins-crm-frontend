import { createStore, combineReducers } from 'redux';
import { newUserInput } from '../reducers/new-user-reducers';
import { accountActions } from '../reducers/account-reducers';
import { userActions } from '../reducers/user-reducers';

const reducers = combineReducers({
    accountActions,
    newUserInput,
    userActions
});

const store = createStore(reducers);

export default store;