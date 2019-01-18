import React from 'react'
import {Link} from 'react-router-dom'
import { API_URL } from '../../config'

const Dashboard = () => {
   return (
    <div>
        Dashboard = {API_URL}
        <p>
            <Link to="/sign-in">Login</Link>
        </p>
    </div>
    )
}

export default Dashboard