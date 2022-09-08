import React from 'react'
import { Link } from "react-router-dom";


export default function Navbar() {
  return (
    <div>
       
       <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <div>
    <button type="button" class="btn btn-success">AMAR</button>
    </div>

    <div class = "col-6">
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"><span class="navbar-brand mb-0 h1">Home</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/about"><span class="navbar-brand mb-0 h1">About</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/services"><span class="navbar-brand mb-0 h1">Services</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/contact"><span class="navbar-brand mb-0 h1">Contact</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link"  to="/gallery"><span class="navbar-brand mb-0 h1">Gallery</span></Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login"><span class="navbar-brand mb-0 h1">Login/Register</span></Link>
        </li>
        
      </ul>
      </div>
    </div>
  </div>
</nav>
   <div>
    
   </div>
   
   </div>
  )
}
