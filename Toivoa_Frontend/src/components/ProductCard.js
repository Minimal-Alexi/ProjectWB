import products from './products';
import productDetails from './productPage/ProductDetails';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const ProductContainer = () => {
  return (
    // <BrowserRouter>
    <section className="product-container">
      {products.map((product, index) => (
        // <Route path="/Productpage" {<productDetails />}>
        <div className="product-card" key={index}>
          <div className="image-container">
            <img
              src={product.image}
              alt="Product Image"
              className="product-image"
            />
            <a href="#" className="wishlist" aria-label="View Wishlist">
              <i className="fa-regular fa-heart"></i>
            </a>
            <button className="add-to-cart">Add to cart</button>
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-price">{product.price}</p>
            <p className="product-reviews">{product.reviews}</p>
          </div>
        </div>
      ))}
    </section>
    // </BrowserRouter>
  );
};
  
  export default ProductContainer;