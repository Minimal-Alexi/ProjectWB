import { useContext } from "react";
import { ShopContext } from "../../context/shopContext";
import style from "./Cart.module.css";

export const CartItem = (props) => {
  const { _id, name, price, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className={style.cartItem}>
      <img src={image[0]} />
      <div className={style.description}>
        <p>
          <b>{name}</b>
        </p>
        <p> Price: ${price}</p>
        <div className={style.countHandler}>
          <button onClick={() => removeFromCart(_id)}> - </button>
          <input
            value={cartItems[_id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), _id)}
          />
          <button onClick={() => addToCart(_id)}> + </button>
        </div>
      </div>
    </div>
  );
};