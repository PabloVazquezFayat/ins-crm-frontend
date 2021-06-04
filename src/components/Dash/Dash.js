import './Dash.css'
import React from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/API/fetch-data'

import DashSidebar from '../DashSidebar/DashSidebar'
import DashCard from '../DashCard/DashCard'

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

                    <div className="panel-container">
                        <DashCard className="panel-container" title={"Clients"} count={"78"} link={'/clients'} />
                    </div>

                    <div className="panel-container">
                        <DashCard className="panel-container" title={"Claims"} count={"78"} link={'/claims'} />
                    </div>

                    <div className="panel-container">
                        <DashCard className="panel-container" title={"Policies"} count={"78"} link={'/policies'} />
                    </div>

                </div>

                <div className="dash-panels-container-2">
                    <div className="panel-container">
                        <h3>Recently added</h3>
                    </div>

                    <div className="panel-container">
                        <h3>Notes recently added</h3>
                    </div>
                </div>

                <div className="dash-panels-container-3">
                    <div className="panel-container">
                        <h3>Recently added</h3>
                    </div>

                    <div className="panel-container">
                        <h3>Notes recently added</h3>
                    </div>
                </div>

            </div>

        </div>
    )
}
