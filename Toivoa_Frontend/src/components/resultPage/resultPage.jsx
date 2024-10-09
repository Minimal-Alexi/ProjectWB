import { ShopContext } from "../../context/shopContext.jsx";
import { WishListContext } from "../../context/WishListContext.jsx"; // Import the WishListContext
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "phosphor-react";
import { FilterContext } from './FilterContext';
import style from "./resultPage.module.css";

const ResultPage = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToWishlist, wishlist } = useContext(WishListContext); // Get the addToWishlist function from context
  const { filteredItems } = useContext(FilterContext);

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className={style.result}>
      <div>
        <h1>Search Result(s):</h1>
      </div>

      {filteredItems.length > 0 ? (
    <section className="product-container">
      {filteredItems.map((product) => {
            const productId = product._id; // Access the correct product ID
            const cartItemAmount = cartItems[productId];
            const isInWishlist = wishlist.some((item) => item._id === productId);
            return (
              <div className="product-card" key={productId}>
            <div className="image-container">
              <img
                src={product.image[0]}
                alt="Product"
                className="product-image"
              />
              <a
                className="wishlist"
                aria-label="Add to Wishlist"
                onClick={() => addToWishlist(product)} // Add to Wishlist on heart click
                style={{backgroundColor: isInWishlist ? "#FF6666" : "white"}}
              >
                <Heart size={32} />
              </a>
              <button
                className="add-to-cart"
                onClick={(e) => {
                  e.preventDefault()
                  addToCart(product._id)
                }}
              >
                Add to cart {cartItemAmount > 0 && `(${cartItemAmount})`}
              </button>
            </div>
            <div className="product-info">
              <h2 
                className="product-name"
                onClick={() => handleProductClick(product._id)}
                style={{ cursor: 'pointer' }}
              >
                {product.name}
              </h2>
              <p className="product-price">${product.price}</p>
              <p className="product-reviews">{product.reviews}</p>
            </div>
          </div>
        );
      })}
    </section>) : (
      <div className={style.noitem}>
      <h2> No item found</h2>
      <button onClick={() => navigate("/")}> Return to shop </button>
      </div>
    )}
    </div>
  );
};

export default ResultPage;
