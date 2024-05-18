import React, {useState} from 'react'
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom'


const SideBar = () => {

    return (
        <>
            <div className='sideBarContainer'>
                <h1>Admin</h1>
                <ul className='unorderdList'>
                    <hr />
                    <Link to="/AdminDashboard" className="sideBarLink">
                        <li>Dashboard</li>
                    </Link>
                    <hr />
                    <Link to="" className="sideBarLink">
                        <li>Bookings</li>
                    </Link>
                    <hr />
                    <Link to="/AdminRooms" className="sideBarLink">
                        <li>Rooms</li>
                    </Link>
                    <hr />
                    <Link to="/admin/scheduler" className="sideBarLink">
                        <li>Staff</li>
                    </Link>
                    <hr />
                    <Link to="/admin/votingstatus" className="sideBarLink">
                        <li>Customers</li>
                    </Link>
                    <hr />
                    <Link to="/admin/result" className="sideBarLink">
                        <li>Payment</li>
                    </Link>
                    <hr />
                </ul>
                <div className="adminLogoutDiv">
                    
                    <p>Logout</p>
                </div>
            </div>
        </>
    )
}

export default SideBar