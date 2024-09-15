import "./ProductPage.css"; // Ensure your CSS file is linked here
import { useState } from "react";
import { productData, products } from "./productData";


import ProductCard from "./ProductCard";
// import ProductThumbnailsDisplay from "./ProductThumbnailsDisplay";
import BuyNow from "./BuyNow";
import SizeSelect from "./SizeSelect";
import ProductInfo from "./ProductInfo";
import ColorSelect from "./ColorSelect";
import DeliveryInfo from "./DeliveryInfo"

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(productData.images[0]);

  return (
    <div className="product-page-wrapper">
      <div className="category-path">
        <p>Account / Gaming / Havic HV G-92 Gamepad</p>
      </div>
      <div className="product-details">
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

        <img
          src={selectedImage}
          alt="Selected product"
          className="main-image"
        />

        <div className="product-details-text">
          <ProductInfo />
          <div className="color-select-wrapper">
            <h4>Colours:</h4>

            <div className="colors">
              {productData.colors.map((color, index) => (
                <ColorSelect {...color} index={index} />
              ))}
            </div>
          </div>
          <SizeSelect />
          <BuyNow />
          <DeliveryInfo />
        </div>
      </div>
      <div className="related-items-container">
        <div className="related-items-padding"></div>
        <p>Related Item</p>
      </div>
      <div className="product-card-container-related">
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
