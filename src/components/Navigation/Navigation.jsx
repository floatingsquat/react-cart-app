import React from 'react'
import './Navigation.css'
import {AiOutlineShoppingCart, AiOutlineShop, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className="nav">
        <ul>
            <li>
             <Link to="/"><span><AiOutlineShop/>Products</span></Link>
             
            </li>
            
            <li><Link to="/Cart"><span><AiOutlineShoppingCart/> Cart</span></Link></li>
            
            
            <li><Link to="/Account"><span><AiOutlineUser/> Account</span></Link></li>
            
            
            <li><Link to="/About"><span><AiOutlineQuestionCircle/> About</span></Link></li>
            
           
        </ul>
    </div>
  )
}

export default Navigation