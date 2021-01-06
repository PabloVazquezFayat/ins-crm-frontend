import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

export default function Dash() {    

    const history = useHistory();
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.accountActions);

    const getData = async ()=> {
        if(Object.keys(userData).length === 0){
            const { data } = await fetchData.account.read();
            if(data){
                dispatch({type: 'SET_ACCOUNT', payload: data.owner});
            }else{
                return history.push('/signin');
            }
        }
    }

    getData();

    return (
        <div>
            <h1>DASHBOARD</h1>
            <h3>{userData.name}</h3>
        </div>
    )
}
