import { ShopContext } from "../../context/shopContext.jsx";
import { ProductContext } from "../../context/productContext";
import { useContext } from "react";
import { CartItem } from "./CartItem.jsx";
import style from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const { products } = useContext(ProductContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className={style.cart}>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className={style.cart}>
        {products.map((product, index) => {
          if (cartItems[product._id] !== 0) {
            return <CartItem data={product} key={index} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className={style.checkout}>
          <p> Subtotal: {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
              <button
                onClick={() => {
                  checkout();
                  navigate("/#");
                }}
              >
                {" "}
                Checkout{" "}
              </button>
        </div>
      ) : (
        <div className={style.checkout}>
        <h2> Your Shopping Cart is Empty</h2>
        <button onClick={() => navigate("/")}> Return to shop </button>
        </div>
        
      )}
    </div>
  );
};
