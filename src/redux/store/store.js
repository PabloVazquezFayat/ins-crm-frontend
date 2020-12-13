import { createStore, combineReducers } from 'redux';
import { createData, readData, updateData, deleteData } from '../reducers/data-reducers';

const reducers = combineReducers({
    createData,
    readData,
    updateData,
    deleteData,
});

const store = createStore(reducers);

export default store;