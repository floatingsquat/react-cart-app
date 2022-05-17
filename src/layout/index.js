import React from "react";
import CartState from "context/CartState";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function MainLayout({ children }) {
  return (
    <>
      <CartState>
        <div className="container">
          <ToastContainer autoClose={1000} position="bottom-right" />
          <div className="card">{children}</div>
        </div>
      </CartState>
    </>
  );
}

export default MainLayout;
