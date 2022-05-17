import { AiOutlineShopping } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Header.css";
import { AiOutlineShop, AiOutlineQuestionCircle } from "react-icons/ai";
import { StateCart } from "context/CartState";

function Header() {
  const { cart } = StateCart();
  return (
    <div className="header">
      <div className="logo-wrapper">
        <Link to="/">
          <div>
            <AiOutlineShop size="70" />
            <h1>CART APP</h1>
          </div>
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <div>
              <Link to="/About">
                <AiOutlineQuestionCircle size="50" />
              </Link>
            </div>
          </li>

          <li>
            <div>
              <Link to="/Cart">
                {" "}
                <AiOutlineShopping size={50} />
                {cart.length > 0 && (
                  <span className="cart-count">{cart.length}</span>
                )}
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
