import { useEffect, useState } from "react";
import { StateCart } from "context/CartState";
import CartItem from "components/CartItem";
import "./CartList.css";
function CartList() {
  const { cart } = StateCart();
  const shipping = 30;
  const [total, setTotal] = useState(0);
  const tax = total * 0.1;

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
  }, [cart]);

  return (
    <div className="cart-list">
      <div className="cart-main">
        {cart.length > 0 ? (
          cart.map((item) => <CartItem item={item} />)
        ) : (
          <h3>Your cart is empty!</h3>
        )}
      </div>
      <div className="cart-sum">
        <h2>Summary</h2>
        <div className="cart-sum-price">
          <p>
            Order Total: <span>${total.toFixed(2)}</span>
          </p>
          <p>
            Shipping: <span>${shipping}</span>
          </p>
          <p>
            Tax: <span>${tax.toFixed(2)}</span>
          </p>
          <hr />
          <p>
            Sub Total:{" "}
            <span>
              <b>${(total + shipping + tax).toFixed(2)}</b>
            </span>
          </p>
        </div>
        <button className="btn-checkout" disabled={cart.length === 0}>
          Checkout Items
        </button>
      </div>
    </div>
  );
}

export default CartList;
