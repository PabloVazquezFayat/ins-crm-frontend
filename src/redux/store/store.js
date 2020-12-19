import { createStore, combineReducers } from 'redux';
import { createData, readData, updateData, deleteData, } from '../reducers/data-reducers';
import { newUserInput } from '../reducers/new-user-reducers';

const reducers = combineReducers({
    createData,
    readData,
    updateData,
    deleteData,
    newUserInput,
});

const store = createStore(reducers);

export default store;