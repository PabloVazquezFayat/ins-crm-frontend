import { createStore, combineReducers } from 'redux';
import { accountActions } from '../reducers/account-reducers';
import { newUserInput } from '../reducers/new-user-reducers';

const reducers = combineReducers({
    newUserInput,
    accountActions,
});

const store = createStore(reducers);

export default store;