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
    <div className="product-detail-wrapper">
      <div className="category-path">
        <p>Account / Gaming / Havic HV G-92 Gamepad</p>
      </div>
      <div className="product-page">
        <div>
          <ProductThumbnailsDisplay />
          <div className="product-details">
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
            <Delivery />
          </div>
          <p>Related Item</p>
          <div className="product-card-container">
            {products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
