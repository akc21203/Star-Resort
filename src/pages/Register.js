import React from 'react'
import '../css/LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

const Register = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Register</h1>
            <div className="input-box">
            <input type="Name" placeholder='Name' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
            <input type="text" placeholder='Email' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
            <input type="text" placeholder='Phone no' required/>
            <FaPhone className='icon' />
            </div>
        

            <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
            </div>
            <button type="submit">Register</button>
        
        </form>
    </div>
  );
};

export default Register;