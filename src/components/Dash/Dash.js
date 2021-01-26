import './Dash.css'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

import DashSidebar from '../DashSidebar/DashSidebar';

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
                history.push('/signin');
            }
        }
    }

    getData();

    return (
        <div className="dash-page">

            <div className="side-bar-container">
                <DashSidebar user={userData} active="dash" />
            </div>

            <div className="dash-board-container">

                <div className="search-bar">

                </div>

                <div className="dash-panels-container-1">

                    <div className="clients-panel">
                            <h3>Clients</h3>
                    </div>

                    <div className="claims-panel">
                        <h3>Claims</h3>
                    </div>

                    <div className="policies-panel">
                        <h3>policies</h3>
                    </div>

                </div>

                <div className="dash-panels-container-2">
                    <div className="recently-added-widget">
                        <h3>Recently added</h3>
                    </div>

                    <div className="notes-panel">
                        <h3>Notes recently added</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}
