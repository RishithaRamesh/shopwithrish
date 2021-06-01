import "./CartItem.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
          <div className="cartitem__image">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="cartitem2">
              <Link to={`/product/${item.product}`} className="cartItem__name">
                <p>{item.name}</p>
              </Link>
              <p className="cartitem__price">Price: ${item.price}</p>
              <p>In Stock: {item.countInStock}</p>
          </div>
          {/* <div className="cartitem__price">  */}
              
          {/* </div> */}
          <div className="options">
            <select
              value={item.qty}
              onChange={(e) => qtyChangeHandler(item.product, e.target.value)}
              className="cartItem__select"
            >
              {[...Array(item.countInStock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="cartItem__deleteBtn">
            <button
              
              onClick={() => removeHandler(item.product)}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
    </div>  
  );
};

export default CartItem;