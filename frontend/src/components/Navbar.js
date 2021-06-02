import "./Navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
  };
  // function bgChange() {
  //   console.log(this.scrollY);
  //   if(this.scrollY > this.innerHeight / 2){
  //     // document.body.classList.add('bg-active');
  //     document.body.classList.add('cart__link2');
  //     console.log("hi");
  //   }else{
  //     // document.body.classList.remove("bg-active");
  //     document.body.classList.remove('cart__link2');
  //   }
  // }
  // window.addEventListener("scroll", bgChange);

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        {/* <h2>Shopping Cart</h2> */}
        <img src="logo.png" alt="store logo"></img>
      </div>
      
      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <div>
              <span>
                <span className="cartlogo__badge">{getCartCount()}</span>
              </span>
            </div>
          </Link>
        </li>
        <li>
          <Link to="/" className="shop" >Shop</Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Navbar;