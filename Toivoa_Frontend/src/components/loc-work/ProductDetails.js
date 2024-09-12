// src/components/ProductPage.js
import React, { useState } from "react";
import "./ProductDetails.css"; // Ensure your CSS file is linked here
import ps5_main from "../../images/ps5_controller_main.png";
import ps5_1 from "../../images/ps5_controller1.png";
import ps5_2 from "../../images/ps5_controller2.jpg";
import ps5_3 from "../../images/ps5_controller3.png";
import ps5_4 from "../../images/ps5_controller4.webp";


const productData = {
  id: 1,
  name: "Cool Sneakers",
  reviews: 80,
  price: 79.99,
  description: "High-quality sneakers perfect for running and casual wear.",
  images: [ps5_main, ps5_1, ps5_2, ps5_3, ps5_4],
  sizes: ["S", "M", "L", "XL"],
  isInStock: true,
  colors: [
    { name: "Red", hex: "#ff0000" },
    { name: "Green", hex: "#00ff00" },
    { name: "Blue", hex: "#0000ff" },
    { name: "Yellow", hex: "#ffff00" },
  ],
};

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);
  const [quantity, setQuantity] = useState(0);
  const [isClick, setIsClick] = useState(null); // State to manage button color

  const [selectedSize, setSelectedSize] = useState(null); // Track selected size

  const handleSizeClick = (size) => {
    setSelectedSize(size); // Update selected size
  };

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
    <div className="product-page">
      <div className="image-container">
        <div className="image-thumbnails">
          {productData.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => setSelectedImage(img)}
              className={selectedImage === img ? "active" : ""}
            />
          ))}
        </div>
        <div className="main-image">
          <img src={selectedImage} alt="Selected product" />
        </div>
      </div>
      <div className="product-details">
        <h1>{productData.name}</h1>
        <p>{productData.reviews}</p>
        {productData.isInStock ? <p>in Stock</p> : <p>Out of stock</p>}
        <p>${productData.price}</p>
        <p>{productData.description}</p>
        <h4>Select Color:</h4>
        <div className="colors">
          {productData.colors.map((color, index) => (
            <label key={index} className="color-radio">
              <input
                type="radio"
                value={color.name}
                // checked={selectedColor === color.name}
                // onChange={handleColorSelect}
                name="radio"
              />
              <span
                className="color-swatch"
                style={{ backgroundColor: color.hex }}
              ></span>
              {color.name}
            </label>
          ))}
        </div>
        <div>
          <p>Size: </p>
          {productData.sizes.map((size, index) => (
            <button
              key={index}
              onClick={() => handleSizeClick(size)}
              style={{
                backgroundColor:
                  selectedSize === size ? "#6179B7" : "transparent", // Change color based on selection
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
      </div>
    </div>
  );
};

export default ProductPage;
