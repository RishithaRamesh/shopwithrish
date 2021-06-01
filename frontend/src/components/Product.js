import "./Product.css";
import { Link } from "react-router-dom";

const Product = ({ imageUrl, description, price, name, productId }) => {
  return (
    <div className="product">
      <div className="img-container">
        <img src={imageUrl} alt={name} className="product-img"/>
        <button  >
            <Link to={`/product/${productId}`} className="bag-btn">
              View
            </Link>
        </button>
      </div>
      

      <div className="product__info">
        <p className="info__name">{name}</p>

        <p className="info__description">{description.substring(0, 100)}...</p>

        <p className="info__price">${price}</p>

        {/* <Link to={`/product/${productId}`} className="info__button">
          View
        </Link> */}
      </div>
    </div>
  );
};

export default Product;