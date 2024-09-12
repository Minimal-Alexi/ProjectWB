import { useState } from "react";
import { productData } from "./productData";

const SizeSelect = () => {
  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size
  };
  return (
    <div>
      <p>Size: </p>
      {productData.sizes.map((size, index) => (
        <button
          key={index}
          onClick={() => handleSizeClick(size)}
          style={{
            backgroundColor: selectedSize === size ? "#6179B7" : "transparent", // Change color based on selection
            color: selectedSize === size ? "white" : "black",
            padding: "10px 20px",
            margin: "5px",
            border: "1px solid black",
            cursor: "pointer",
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelect;
