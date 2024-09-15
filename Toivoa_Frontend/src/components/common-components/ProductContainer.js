import { products } from "../../data.js";
import { ShopContext } from "../shoppingCartPage/shopContext.jsx";
import { useNavigate } from "react-router-dom";
import { Heart } from "phosphor-react";
import { useContext } from "react";

const ProductContainer = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <section className="product-container">
      {products.map((product) => {
        const cartItemAmount = cartItems[product.id];
        return (
          <div className="product-card" key={product.id}>
            <div className="image-container">
              <img
                src={product.image[0]}
                alt="Product"
                className="product-image"
              />
              <a href="/wishlist" className="wishlist" aria-label="View Wishlist">
                <Heart size={32} />
              </a>
              <button
                className="add-to-cart"
                onClick={() => addToCart(product.id)}
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

export default ProductContainer;