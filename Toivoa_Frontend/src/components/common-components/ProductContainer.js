//import { products } from "../../data.js";
import { ShopContext } from "../shoppingCartPage/shopContext.jsx";
import { WishListContext } from "../wishLists/WishListContext.js"; // Import the WishListContext
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "phosphor-react";

const ProductContainer = () => {
  const { addToCart, cartItems } = useContext(ShopContext);
  const { addToWishlist, wishlist } = useContext(WishListContext); // Get the addToWishlist function from context
  const [products, setProducts] = useState([]);


  const navigate = useNavigate();

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };
  const productFetching = async (number) => {
    try {
      const link = `http://localhost:4000/api/products?number=${number}`;
      const response = await fetch(link,
        {
          method: "GET",
          headers: {
            "Content-type": "application/json",
          },
        });
      if (response.ok) {
        const data = await response.json();
        setProducts(data);
      }
    }
    catch (err) {
      console.error(err);
      console.error('Failed to fetch products');
    }
  }

  useEffect(() => {
    productFetching(10);
  }, []);
  return (
    <section className="product-container">
      {products.map((product) => {
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
                style={{ backgroundColor: isInWishlist ? "#FF6666" : "white" }}
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

export default ProductContainer;
