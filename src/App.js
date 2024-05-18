import React from "react";
import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/animate.css";
import "./css/Admin.css";

import "./css/animate.min.css";
import "./App.css";

import Header from "./components/common/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import {
  Home,
  Booking,
  AboutUs,
  Contact,
  PageNotFound,
  Room,
  Services,
  Team,
  Testimonial,  
} from "./pages/index";
import AdminNavbar from "./admin/AdminNavbar";
import AdminSidebar from "./admin/AdminSidebar";
import AdminDashboard from "./admin/AdminDashboard";
import Loginform from "./pages/Loginform";
import Register from "./pages/Register";
import AdminLogin from "./admin/AdminLogin";
import AdminRooms from "./admin/AdminRooms";

import Footer from "./components/common/Footer";
export default function App() {
  return (
    <>
      <div>
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/team" element={<Team />} />
            <Route path="/testimonial" element={<Testimonial />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<PageNotFound />} />
            <Route path="/rooms" element={<Room />} />
            <Route path="/services" element={<Services />} />
          <Route path="/adminNavbar" element={<AdminNavbar />} />
          <Route path="/adminSidebar" element={<AdminSidebar />} />
          <Route path="/adminDashboard" element={<AdminDashboard />} />
          <Route path="/loginform" element={<Loginform />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminRooms" element={<AdminRooms />} />

          
          

          </Routes>
          {/* <Footer /> */}

        </Router>
      </div>
    </>
  );
}