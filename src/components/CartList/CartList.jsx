import React from 'react'
import { StateCart } from 'context/CartState'
import CartItem from 'components/CartItem/CartItem';
import './CartList.css'
function CartList() {
    const {cart}  = StateCart();

  return (
    <div className="cart-list">
       <div className="cart-main">
       {
           cart.map((item)=> (
               <CartItem item={item} />
               
           ))
    
       }
       </div>
       <div className="cart-sum">
         <h2>Summary</h2>
         <div className="cart-sum-price">
           <p>Order Total: <span>$2.310.00</span></p>
           <p>Shipping: <span>$150</span></p>
           <p>Tax: <span>$125</span></p>
           <hr/>
           <p>Sub Total: <span><b>$2.415.00</b></span></p>
         </div>
         <button class="btn-checkout">Checkout Items</button>
       </div>
       {console.log(cart)}
    </div>
  )
}

export default CartList