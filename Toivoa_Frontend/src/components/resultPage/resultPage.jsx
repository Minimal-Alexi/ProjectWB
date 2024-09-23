import { ShopContext } from "../shoppingCartPage/shopContext.jsx";
import { WishListContext } from "../wishLists/WishListContext.js"; // Import the WishListContext
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "phosphor-react";
import { FilterContext } from './FilterContext';

const ResultPage = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToWishlist, wishlist } = useContext(WishListContext); // Get the addToWishlist function from context
  const { filteredItems } = useContext(FilterContext);

  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="product-container">
      {filteredItems.map((product) => {
        const cartItemAmount = cartItems[product.id];
        const isInWishlist = wishlist.some((item) => item.id === product.id);
        return (
          <div className="product-card" key={product.id}>
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
                  addToCart(product.id)
                }}
              >
                Add to cart {cartItemAmount > 0 && `(${cartItemAmount})`}
              </button>
            </div>
            <div className="product-info">
              <h2 
                className="product-name"
                onClick={() => handleProductClick(product.id)}
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
    </section>
  );
};

export default ResultPage;
