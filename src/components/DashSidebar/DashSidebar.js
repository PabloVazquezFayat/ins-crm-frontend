import './DashSidebar.css'
import React from 'react'
import { Link } from 'react-router-dom'

export default function DashSidebar(props) {

    const { user } = props

    return (
        <div className="dash-sidebar">
            <div className="avatar-container">
                <h4>{user.name}</h4>
                <Link to="/profile"/>
            </div>
            <hr/>
            <div className="dash-buttons">
                <div className="dash-button">
                    <Link to="/dash">Dashboard</Link>
                </div>
                <div className="dash-button">
                    <Link to="/clients">Clients</Link>
                </div>
                <div className="dash-button">
                    <Link to="/claims">Claims</Link>
                </div>
                <div className="dash-button">
                    <Link to="/policies">Policies</Link>
                </div>
                <div className="dash-button">
                    <Link to="/Notes">Notes</Link>
                </div>
            </div>
        </div>
    )
}
