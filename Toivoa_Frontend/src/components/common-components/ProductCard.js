import { products } from "../../data.js";
import { ShopContext } from "../shoppingCartPage/shopContext.jsx";
//import productDetails from '../productPage/ProductDetails';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Heart } from "phosphor-react";
import { useContext } from "react";

const ProductContainer = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  return (
    <section className="product-container">
      {products.map((product, index) => {
        const cartItemAmount = cartItems[product.id];
        return (
          <div className="product-card" key={index}>
            <div className="image-container">
              <img
                src={product.image}
                alt="Product Image"
                className="product-image"
              />
              <a href="#" className="wishlist" aria-label="View Wishlist">
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
              <h2 className="product-name">{product.name}</h2>
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
