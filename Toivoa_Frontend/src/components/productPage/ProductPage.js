import "./ProductPage.css";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import getRandomProducts from "../../hooks/randomProductGetter.js";
import { ProductContext } from "../../context/productContext.jsx";
import RelatedProductCard from "./RelatedProductCard";
import BuyNow from "./BuyNow";
import SizeSelect from "./SizeSelect";
import ProductInfo from "./ProductInfo";
import ColorSelect from "./ColorSelect";
import DeliveryInfo from "./DeliveryInfo"
import ReviewCard from "./ReviewCard.js";

const ProductPage = () => {
  const relatedProductNumber = 4;

  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState("");
  const [product, setProduct] = useState(null);
  const { products, fetchProductbyID } = useContext(ProductContext);

  useEffect(() => {
    const fetchAndSetProduct = async () => {
      // Find the product based on the ID from the URL
      const foundProduct = products.find(p => p._id === id);

      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedImage(foundProduct.image[0]); // Use the first image
      } else {
        const product = await fetchProductbyID(id); // Await the asynchronous call
        if (product) {
          setProduct(product);
          setSelectedImage(product.image[0]); // Use the first image
        }
      }
      console.log(product);
    };

    fetchAndSetProduct(); // Call the function
  }, [id, products]);

  const relatedProducts = getRandomProducts(products, relatedProductNumber);

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
      <div className="review-container">
        {Array.isArray(product.reviewList) ? (
          product.reviewList.map((review, index) => (
            <ReviewCard {...review} key={index} />
          ))
        ) : (
          <p>No reviews available</p>
        )}
      </div>
      <div className="related-items-container">
        <div className="related-items-padding"></div>
        <p>Related Item</p>
      </div>
      <div className="product-card-container-related">
        {relatedProducts
          .map((relatedProduct) => (
            <RelatedProductCard {...relatedProduct} key={relatedProduct._id} />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;