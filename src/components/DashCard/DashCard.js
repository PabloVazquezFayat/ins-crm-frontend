import './DashCard.css'
import React from 'react'
import { Link } from 'react-router-dom'
import MoreVertIcon from '@material-ui/icons/MoreVert'

export default function DashCard(props) {

    const { title, count, link } = props;
    //drop-shadow
    return (
        <div className="dash-card-container drop-shadow">
            <hr/>
            <div className="dash-card-wrapper">
                <div className="dash-card-content">
                    <h2>{title}</h2>
                    <h1>{count}</h1>
                </div>
                <div className="dash-card-actions">
                    <Link to={link}>
                        <MoreVertIcon/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
