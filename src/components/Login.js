import React from 'react'
import Navbar from './Navbar'
import './login.css'
export default function Login() {
  return (

    <div>
        <div>
           <Navbar/>
        </div>
        <div className='login'>
          Login/Register
        </div>

        <link rel="stylesheet" href="style.css" />
        <div className="main">
     <div className="sub-main">
       <div>
         
         <div>
           <h1>Login Page</h1>
           <div>
             
             <input type="text" placeholder="user name" className="name"/>
           </div>
           <div className="second-input">
             
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button className='but'>Login</button>
          </div>
           <br></br>
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>

    </div>

  )
}
