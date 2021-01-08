import './DashSidebar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '@material-ui/icons/Dashboard'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DescriptionIcon from '@material-ui/icons/Description';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export default function DashSidebar(props) {

    const { user } = props

    return (
        <div className="dash-sidebar drop-shadow">

            <div className="avatar-container drop-shadow">
                <h4>{user.name}</h4>
                <Link className="account-link-button" to="/account">Account</Link>
            </div>
            
            <div className="dash-buttons">
                <div className="dash-button">
                    <Dashboard/>
                    <Link className="dash-button-link" to="/dash">Dashboard</Link>
                </div>
                <div className="dash-button">
                    <AccountBoxIcon/>
                    <Link className="dash-button-link" to="/clients">Clients</Link>
                </div>
                <div className="dash-button">
                    <DescriptionIcon/>
                    <Link className="dash-button-link" to="/claims">Claims</Link>
                </div>
                <div className="dash-button">
                    <DescriptionIcon/> 
                    <Link className="dash-button-link" to="/policies">Policies</Link>
                </div>
                <div className="dash-button">
                    <NoteAddIcon/>
                    <Link className="dash-button-link" to="/Notes">Notes</Link>
                </div>
            </div>

        </div>
    )
}
