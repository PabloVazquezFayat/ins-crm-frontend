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
                history.push('/signin');
            }
        }
    }

    getData();

    return (
        <div className="dash-page">

            <div className="dash-sidebar">
                <h3>{userData.name}</h3>
            </div>

            <div className="dash-board-container">

                <div className="search-bar">

                </div>

                <div className="dash-panels-container">

                    <div className="clients-panel">

                    </div>

                    <div className="claims-panel">

                    </div>

                    <div className="policies-panel">

                    </div>

                    <div className="assets-panel">

                    </div>

                    <div className="recently-added-widget">

                    </div>

                    <div className="notes-panel">

                    </div>

                </div>

            </div>

        </div>
    )
}
