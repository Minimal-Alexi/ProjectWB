

import React, { useState } from "react";
import { productData } from "./productData";


const ProductThumbnailsDisplay = (props) => {
const [selectedImage, setSelectedImage] = useState(productData.images[0]);

  return (
    <div className="image-thumbnails-container">
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
  );
};

export default ProductThumbnailsDisplay;
