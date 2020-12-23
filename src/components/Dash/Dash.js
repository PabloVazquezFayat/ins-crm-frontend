import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchData } from '../../utility/fetch-data/fetch-data'

export default function Dash() {

    const dispatch = useDispatch();
    const {userActions: {userData}} = useSelector(state => state);

    const getData = async ()=> {

        const reqData = {
            account_id: userData.account,
            user_id: userData._id
        };

        const { data } = await fetchData.account.read(reqData);

        console.log(data);

        if(data){
            dispatch({type: 'READ_ACCOUNT', payload: data});
        }

    }

    getData();

    return (
        <div>
            <h1>DASHBOARD</h1>
        </div>
    )
}
