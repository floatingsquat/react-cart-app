import "./ProductItem.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { StateCart } from "context/CartState";

function ProductItem({ item }) {
  const { addProductToCart } = StateCart();

  return (
    <div className="product-item">
      <img src={item.img} alt={item.name} />
      <div className="product-item-title">
        <h5>{item.name} </h5>
      </div>
      <div className="product-item-price">
        <small>${item.price}</small>
      </div>
      <div>
        <button className="btn-add-cart" onClick={() => addProductToCart(item)}>
          Add to cart <AiOutlineShoppingCart size={25} />{" "}
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
