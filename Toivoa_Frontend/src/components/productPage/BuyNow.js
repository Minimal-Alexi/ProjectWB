import { useState } from "react";
import { Heart } from "@phosphor-icons/react";

const BuyNow = () => {
  const [quantity, setQuantity] = useState(0);
  const [isClick, setIsClick] = useState(null);

  const handleIncrementQuantity = () => {
    setQuantity((prevQ) => prevQ + 1);
    setIsClick("plus");
  };

  const handleDecrementQuantity = () => {
    setQuantity((prevQ) => {
      if (prevQ > 0) {
        return prevQ - 1;
      }
      return (prevQ = 0);
    });
    setIsClick("minus");
  };
  return (
    <div className="buy-now-container">
      <div className="button-wrapper">
        <button
          className="change-quality"
          onClick={handleDecrementQuantity}
          style={{
            backgroundColor: isClick === "minus" ? "#6179B7" : "transparent",
            color: "black",
          }}
        >
          -
        </button>

        <p className="quantity-display">{quantity}</p>
        <button
          className="change-quality"
          onClick={handleIncrementQuantity}
          style={{
            backgroundColor: isClick === "plus" ? "#6179B7" : "transparent",
            color: "black",
          }}
        >
          +
        </button>
      </div>
      <button className="buy-now-btn">Buy Now</button>
      <div className="heart-icon">
        <Heart size={16} />
      </div>
    </div>
  );
};

export default BuyNow;
