import './Claims.css'
import React from 'react'
import DashSidebar from '../DashSidebar/DashSidebar';
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

export default function Clients() {

    const history = useHistory();
    const dispatch = useDispatch();
    const { userData } = useSelector(state => state.accountActions);

    const getData = async ()=> {
        if(Object.keys(userData).length === 0){
            const { data } = await fetchData.account.read();
            if(data){
                dispatch({type: 'SET_ACCOUNT', payload: data.owner});
            }else{
                history.push('/signin');
            }
        }
    }

    getData();

    return (
        <div className="claims-page">
            <DashSidebar user={userData} active="claims"/>
        </div>
    )
}