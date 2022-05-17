import React, { useContext, useReducer } from "react";
import CartContext from "./CartContext";
import CartReducer from "./CartReducer";
import data from "../data";
import { toast } from "react-toastify";
const CartState = (props) => {
  const initialState = {
    product: data,
    cart: [],
  };
  const [state, dispatch] = useReducer(CartReducer, initialState);

  //actions
  const addProductToCart = (product) => {
    dispatch({ type: "ADD_CART", payload: product });
    toast.success("Product added to your cart!");
  };
  const removeFromCart = (product) => {
    dispatch({ type: "REMOVE_CART", payload: product });
    toast.error("Product removed from your cart!");
  };
  const changeQty = (product) => {
    dispatch({ type: "CHANGE_QTY", payload: product });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        dispatch,
        addProductToCart,
        removeFromCart,
        changeQty,
        cart: state.cart,
        product: state.product,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const StateCart = () => {
  return useContext(CartContext);
};

export default CartState;
