import "./Navbar.css";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

const Navbar = () => {
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  // const getCartCount = () => {
  //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  // };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Shoppee</h2>
      </div>

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link" >
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart 
              <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
        <li>
          <Link to="/">Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;