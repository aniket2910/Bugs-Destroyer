import React from 'react'
import './Logout.css'
import logout from './logout.gif'
export const Logout = () => {

    window.onload = () => {
        setTimeout(() => {
            // window.location.href = '/login';
        }, 3000);
    }

  return (
    <div>
        
        <div className="main-container">
        <div className="gif-container">
            <img src={logout}
                alt="Success"/>
        </div>
        <div className="text">
            <h2>Logout Successfull go back</h2>
            <p>Thank you for visiting our website. See you.</p>
        </div>
   </div>

    </div>
  )
}
