import { useEffect, useState } from "react"
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";


function AdminDashboard(){
  return (
    <>
      <div className='adminContainer adminDashboardContainer'>
        <AdminNavbar />
        <div className="adminDiv adminDashboardDiv">
          <AdminSidebar />
          <div className="dashboardSection">
            <h1>Dashboard</h1>
            <div className="dashboardDetails">
              <div className="dashboardCard">
                <p>Total Bookings: 300</p>
            </div>
            <div className="dashboardCard">
                <p>Available Rooms: 350</p>
            </div>
            <div className="dashboardCard">
                <p>Total Query: 10</p>
            </div>
            <div className="dashboardCard">
                <p>Check In : 30</p>
            </div>
            <div className="dashboardCard">
                <p>Check Out: 10</p>
            </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}


export default AdminDashboard