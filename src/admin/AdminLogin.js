import React from 'react'
import '../css/LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const AdminLogin = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Admin Login</h1>
            <div className="input-box">
                
            <input type="text" placeholder='Email' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
            </div>
        
            <button type="submit">Login</button>
            
        </form>
    </div>
  );
};

export default AdminLogin;