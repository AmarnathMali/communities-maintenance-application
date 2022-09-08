import React from 'react';
import Navbar from './Navbar';
import img1 from './Images/homepage.webp';
import './Style.css';
import { Link } from "react-router-dom";

export default function 
() {
  return (
    <div>
        <Navbar/>
        <div className='image'>
            <img src={img1} alt='img'/>
            <div className='top-left'>AS WE EVOLVE, OUR HOMES SHOULD TOO</div>
        </div>
        
    </div>
  )
}
