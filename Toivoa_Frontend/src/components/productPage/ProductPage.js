import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { products, relatedProducts } from "../../data";

import RelatedProductCard from "./RelatedProductCard";
import BuyNow from "./BuyNow";
import SizeSelect from "./SizeSelect";
import ProductInfo from "./ProductInfo";
import ColorSelect from "./ColorSelect";
import DeliveryInfo from "./DeliveryInfo"

const ProductPage = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Find the product based on the ID from the URL
    const foundProduct = products.find(p => p.id === parseInt(id));
    if (foundProduct) {
      setProduct(foundProduct);
      // console.log('product is: ',foundProduct)
      setSelectedImage(foundProduct.image[0]); // Changed from 'images' to 'image'
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-page-wrapper">
      <div className="category-path">
        <p>Account / Gaming / {product.name}</p>
      </div>
      <div className="product-details">
        <div className="image-thumbnails">
          {Array.isArray(product.image) ? (
            product.image.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
                className={selectedImage === img ? "active" : ""}
              />
            ))
          ) : (
            <p>No images available</p>
          )}
        </div>

        <img
          src={selectedImage}
          alt="Selected product"
          className="main-image"
        />

        <div className="product-details-text">
          
          <ProductInfo {...product} />
          <div className="color-select-wrapper">
            <h4>Colours:</h4>

            <div className="colors">
              {product.colors && product.colors.map((color, index) => (
                <ColorSelect {...color} key={index} />
              ))}
            </div>
          </div>
          <SizeSelect sizes={product.sizes} />
          <BuyNow product={product} />
          <DeliveryInfo />
        </div>
      </div>
      <div className="related-items-container">
        <div className="related-items-padding"></div>
        <p>Related Item</p>
      </div>
      <div className="product-card-container-related">
        {relatedProducts
          .map((relatedProduct) => (
            <RelatedProductCard {...relatedProduct} key={relatedProduct.id} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;