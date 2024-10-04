//import { products } from "../../data.js";
import { ProductContext } from "../../context/productContext.jsx";
import { ShopContext } from "../../context/shopContext.jsx";
import { WishListContext } from "../../context/WishListContext.jsx"; // Import the WishListContext
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "phosphor-react";

const ProductContainer = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToWishlist, wishlist } = useContext(WishListContext); // Get the addToWishlist function from context
  const { products } = useContext(ProductContext);


  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="product-container">
      {products.map((product) => {
        const cartItemAmount = cartItems[product._id];
        const isInWishlist = wishlist.some((item) => item.id === product._id);
        return (
          <div className="product-card" key={product._id}>
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
                style={{ backgroundColor: isInWishlist ? "#FF6666" : "white" }}
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
    </section>
  );
};

export default ProductContainer;
