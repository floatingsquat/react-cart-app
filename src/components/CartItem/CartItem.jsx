import { StateCart } from "context/CartState";
import React, { useEffect } from "react";
import "./CartItem.css";
function CartItem({ item }) {
  const { addProductToCart, removeFromCart, changeQty } = StateCart();

  return (
    <div className="cart-item">
      <img src={item.img} alt={item.name} />
      <div className="cart-item-name-wrapper">
        <h5>{item.name}</h5>
      </div>

      <div className="cart-item-qty">
        <button onClick={() => changeQty(item)}>-</button>
        <h5>{item.qty}</h5>
        <button onClick={() => addProductToCart(item)}>+</button>
      </div>

      <small>${item.price} </small>
      <div className="delete-wrapper">
        <button
          onClick={() => removeFromCart(item)}
          className="cart-item-delete"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default CartItem;
