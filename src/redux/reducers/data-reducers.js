import { initialState } from '../initialState/initialState';
import { actions } from '../actions/actions';

const { GET, POST, PUT, DELETE } = actions.dataActions;

function createData(state = initialState, action){
    return state;
}

function readData(state = initialState, action){
    if(action.type === GET){
        return {clientData: action.payload};
    }
    
    return state;
}

function updateData(state = initialState, action){
    return state;
}

function deleteData(state = initialState, action){
    return state;
}

export { createData, readData, updateData, deleteData };