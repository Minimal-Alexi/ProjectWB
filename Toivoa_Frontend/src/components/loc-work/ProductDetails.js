// src/components/ProductPage.js
import React, { useState } from "react";
import "./ProductDetails.css"; // Ensure your CSS file is linked here
import { productData, products } from "./productData";

import Delivery from "./DeliveryInfo";
import ProductCard from "./ProductCard";
import ProductThumbnailsDisplay from "./ProductThumbnailsDisplay";
import BuyNow from "./BuyNow";
import SizeSelect from "./SizeSelect";
import ProductInfo from "./ProductInfo";
import ColorSelect from "./ColorSelect";

const ProductPage = () => {
  return (
    <div className="product-page">
      <ProductThumbnailsDisplay />
      <div className="product-details">
        <ProductInfo />
        <h4>Select Color:</h4>
        <div className="colors">
          {productData.colors.map((color, index) => (
            <ColorSelect {...color}/>
          ))}
        </div>

        <SizeSelect />
        <BuyNow />
        <Delivery />
        <p>Related Item</p>
        {products.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
