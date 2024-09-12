import products from './products';

const ProductContainer = () => {
  return (
    <section className="product-container">
      {products.map((product, index) => (
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
  );
};
  
  export default ProductContainer;