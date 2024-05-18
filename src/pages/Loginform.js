import React from 'react'
import '../css/LoginRegister.css';
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Loginform = () => {
  return (
    <div className='wrapper'>
        <form action="">
            <h1>Sign In</h1>
            <div className="input-box">
                
            <input type="text" placeholder='Email' required/>
            <FaUser className='icon' />
            </div>
            <div className="input-box">
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon' />
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot Password?</a>
            </div>
            <button type="submit">Sign In</button>
            <div className="register-link">
                <p>Don't have an account? <a href="/register">Register</a></p>
            </div>
        </form>
    </div>
  );
};

export default Loginform;