import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/fetch-data/fetch-data'

export default function Dash() {

    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.accountActions);

    const getData = async ()=> {
        if(Object.keys(userData).length === 0){
            const { data } = await fetchData.account.read();
            dispatch({type: 'SET_ACCOUNT', payload: data.owner});
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
