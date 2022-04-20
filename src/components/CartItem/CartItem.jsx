import React from 'react'
import './CartItem.css'
function CartItem({item}) {
  return (
    <div className="cart-item">
        <img src={item.img} />
        <div className="cart-item-name-wrapper">
        <h5>{item.name}</h5>
        </div>
        
        <h5>{item.qty}</h5>
        <small>${item.price}</small>
        
       
    </div>
    
  )
}

export default CartItem