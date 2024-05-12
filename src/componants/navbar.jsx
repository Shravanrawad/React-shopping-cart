import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Navbar() {
 
 const items = useSelector((state) => state.cart)

  return (
    <div className='nav' style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
      <span className='logo'><h2 style={{color: 'skyblue'}}>Shopify</h2></span>
      <div>

       <NavLink className='navLink' to='/'>Home</NavLink>
       <NavLink className='navLink' to='/cart'>Cart</NavLink>

       <span className='cartCount'>Cart items : {items.length}</span>
      </div>
    </div>
  )
}

export default Navbar
