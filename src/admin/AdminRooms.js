import { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

function AdminRooms() {
  return (
    <>
      <div className="adminContainer adminDashboardContainer">
        <AdminNavbar />
        <div className="adminDiv adminDashboardDiv">
          <AdminSidebar />
          <div className="roomsSection">
            <h1>Rooms</h1>
            <button className="addRoomBtn">Add Room +</button>
            <div className="roomlist">
              <table className="table-bordered" border="1">
                <tbody>
                  <tr>
                    <th>S No</th>
                    <th>Image</th>
                    <th>Types</th>
                    <th>Pricing</th>
                    <th>Facility</th>
                    <th>Availability</th>
                    <th>Tools</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>path</td>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                    <td>text</td>
                    <td>
                      <button className="deleteBtn">Delete</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminRooms;
