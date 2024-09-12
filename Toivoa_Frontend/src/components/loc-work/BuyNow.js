import { useState } from "react";

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
    <>
      <button
        onClick={handleIncrementQuantity}
        style={{
          backgroundColor: isClick === "plus" ? "#6179B7" : "transparent",
          color: "black",
        }}
      >
        +
      </button>
      <p>{quantity}</p>
      <button
        onClick={handleDecrementQuantity}
        style={{
          backgroundColor: isClick === "minus" ? "#6179B7" : "transparent",
          color: "black",
        }}
      >
        -
      </button>
      <button>Buy Now</button>
    </>
  );
};

export default BuyNow;
