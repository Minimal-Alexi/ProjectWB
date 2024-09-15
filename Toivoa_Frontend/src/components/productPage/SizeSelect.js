import { useState } from "react";

const SizeSelect = (props) => {
  const [selectedSize, setSelectedSize] = useState(); // Track selected size
  console.log(props);
  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size
  };
  return (
    <div className="size-wrapper">
      <p>Size: </p>
      {props.sizes.map((size, index) => (
        <button className="size-btn"
          key={index}
          onClick={() => handleSizeClick(size)}
          style={{
            backgroundColor: selectedSize === size ? "#6179B7" : "transparent", // Change color based on selection
            color: selectedSize === size ? "white" : "black",
          }}
        >
          {size}
        </button>
      ))}
    </div>
  );
};

export default SizeSelect;
