import "./HomeScreen.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Product from "../components/Product";

//Actions
import { getProducts as listProducts } from "../redux/actions/productActions";

const HomeScreen = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

// function bgChanger() {
//   console.log(this.scrollY);
//   if(this.scrollY > this.innerHeight / 2){
//     document.body.classList.add('bg-active');
//     document.body.classList.add('cart__link:hover');
//   }else{
//     document.body.classList.remove("bg-active");
//     // document.body.classList.remove('homescreen__title');
//   }
// }
// window.addEventListener("scroll", bgChanger);

  return (

    <div className="homescreen">
      <div className="lady1">
          <img src="try3.jpg" alt="lady"></img>
      </div>
      <div className="services">
        <div className="homescreen__title">
          <h2><center>Our Services</center></h2>
        </div>
        <div className="serviceslist">
          <h2>Free returns and exchanges</h2>
          <h2>Buy online and pickup in store</h2>
          <h2>Free gift wrapping</h2>
          <h2>Complimentary Delivery</h2>
        </div>
      </div>
      <br />
      <div className="lady">
          <img className="centerfit" src="try2.jpg" alt="lady"></img>
          <img className="centerfit1" src="try1.jpg" alt="lady"></img>
      </div>
      <div className="homescreen__title">
        <h2><center>Shop The Collection</center></h2>
      </div>
      
      <div className="homescreen__products">
        {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => (
            <Product 
              key={product._id}
              name={product.name}
              description={product.description}
              price={product.price}
              imageUrl={product.imageUrl}
              productId={product._id}
            /> // we send these arguments to components/Product.js
          ))
        )}
      </div>
    </div>
  );
};

export default HomeScreen;