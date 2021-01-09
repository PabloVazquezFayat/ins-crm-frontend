import './DashSidebar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import Dashboard from '@material-ui/icons/Dashboard'
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import DescriptionIcon from '@material-ui/icons/Description';
import NoteAddIcon from '@material-ui/icons/NoteAdd';

export default function DashSidebar(props) {

    const { user, active } = props;

    return (
        <div className="dash-sidebar drop-shadow">

            <div className="avatar-container drop-shadow">
                <h4>{user.name}</h4>
                <Link className="account-link-button" to="/account">Account</Link>
            </div>
            
            <div className="dash-buttons">
                <div className={`dash-button ${ active === 'dash' ? 'active-dash-button' : null }`} >
                    <Dashboard fontSize="small"/>
                    <Link className="dash-button-link" to="/dash">Dashboard</Link>
                </div>
                <div className={`dash-button ${ active === 'clients' ? 'active-dash-button' : null }`} >
                    <AccountBoxIcon fontSize="small"/>
                    <Link className="dash-button-link" to="/clients">Clients</Link>
                </div>
                <div className={`dash-button ${ active === 'claims' ? 'active-dash-button' : null }`}>
                    <DescriptionIcon fontSize="small"/>
                    <Link className="dash-button-link" to="/claims">Claims</Link>
                </div>
                <div className={`dash-button ${ active === 'policies' ? 'active-dash-button' : null }`}>
                    <DescriptionIcon fontSize="small"/> 
                    <Link className="dash-button-link" to="/policies">Policies</Link>
                </div>
                <div className={`dash-button ${ active === 'notes' ? 'active-dash-button' : null }`}>
                    <NoteAddIcon fontSize="small"/>
                    <Link className="dash-button-link" to="/Notes">Notes</Link>
                </div>
            </div>

        </div>
    )
}
